import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import MusterRoll from './MusterRoll';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>) => {
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
  setDoc: (...args: unknown[]) => mockSetDoc(...args),
}));

// Mock firebase lib
vi.mock('../lib/firebase', () => ({
  paths: {
    user: (address: string) => ({
      profile: `mock_path_for_${address}`,
    })
  },
  isFirebaseConfigured: true,
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

  it('handles enlistment error without falling back to enlisted state', async () => {
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

    // It should not display the success message on failure
    expect(screen.queryByText('Signal Received: Link Stable')).not.toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  it('bypasses enlistment transmission when Firebase is not configured', async () => {
    // Override the mock for this specific test
    vi.mocked(await import('../lib/firebase')).isFirebaseConfigured = false;

    mockUseActiveAccount.mockReturnValue({ address: '0x123abc' });
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(<MusterRoll />);

    const aliasInput = screen.getByLabelText('Sovereign Alias *');
    const submitButton = screen.getByText('Confirm Enlistment');

    fireEvent.change(aliasInput, { target: { value: 'TestAliasUnconfigured' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(consoleWarnSpy).toHaveBeenCalledWith("Transmission Bypassed: Firebase is not configured.");
    });

    // setDoc should not have been called
    expect(mockSetDoc).not.toHaveBeenCalled();

    // It should display the success message due to bypass
    expect(screen.getByText('Signal Received: Link Stable')).toBeInTheDocument();

    consoleWarnSpy.mockRestore();
    // Restore the mock back to true for other tests
    vi.mocked(await import('../lib/firebase')).isFirebaseConfigured = true;
  });
});
