import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import MusterRoll from './MusterRoll';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    div: ({ children, className, ...props }: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { initial, animate, exit, variants, transition, ...rest } = props;
      return <div className={className} {...rest}>{children}</div>;
    },
  },
}));

// Mock thirdweb react
const mockUseActiveAccount = vi.fn();
vi.mock('thirdweb/react', () => ({
  ConnectButton: () => <button data-testid="connect-button">Connect</button>,
  useActiveAccount: () => mockUseActiveAccount(),
}));

// Mock thirdwebClient
vi.mock('../lib/thirdwebClient', () => ({
  client: {},
}));

// Mock firebase firestore
const mockSetDoc = vi.fn();
vi.mock('firebase/firestore', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setDoc: (...args: any[]) => mockSetDoc(...args),
}));

// Mock firebase lib
vi.mock('../lib/firebase', () => ({
  paths: {
    user: (address: string) => ({
      profile: `mock_path_for_${address}`,
    })
  }
}));

describe('MusterRoll Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the unauthenticated view when no account is active', () => {
    mockUseActiveAccount.mockReturnValue(null);
    render(<MusterRoll />);

    expect(screen.getByText('Profile // The Muster Roll')).toBeInTheDocument();
    expect(screen.getByText('Enlist in the Federation')).toBeInTheDocument();
    expect(screen.getByTestId('connect-button')).toBeInTheDocument();
  });

  it('renders the authenticated view when account is active', () => {
    mockUseActiveAccount.mockReturnValue({ address: '0x123abc' });
    render(<MusterRoll />);

    expect(screen.getByText('Identity Confirmed')).toBeInTheDocument();
    expect(screen.getByLabelText('Sovereign Alias *')).toBeInTheDocument();
    expect(screen.getByLabelText('ENS Name (Optional)')).toBeInTheDocument();
    expect(screen.getByText('Confirm Enlistment')).toBeInTheDocument();
  });

  it('submits the form and displays enlisted state', async () => {
    mockUseActiveAccount.mockReturnValue({ address: '0x123abc' });
    render(<MusterRoll />);

    const aliasInput = screen.getByLabelText('Sovereign Alias *');
    const submitButton = screen.getByText('Confirm Enlistment');

    fireEvent.change(aliasInput, { target: { value: 'TestAlias' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockSetDoc).toHaveBeenCalled();
    });

    // Once enlisted, it should display the success message
    expect(screen.getByText('Signal Received: Link Stable')).toBeInTheDocument();
    expect(screen.getByText('Welcome to the Federation, TestAlias.')).toBeInTheDocument();
  });

  it('handles enlistment error by falling back to enlisted state', async () => {
    mockUseActiveAccount.mockReturnValue({ address: '0x123abc' });
    mockSetDoc.mockRejectedValueOnce(new Error('Mock DB Error'));
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(<MusterRoll />);

    const aliasInput = screen.getByLabelText('Sovereign Alias *');
    const submitButton = screen.getByText('Confirm Enlistment');

    fireEvent.change(aliasInput, { target: { value: 'TestAliasError' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith("Transmission Failed: Registry sync error.", expect.any(Error));
    });

    // Once enlisted (via fallback), it should display the success message
    expect(screen.getByText('Signal Received: Link Stable')).toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});
