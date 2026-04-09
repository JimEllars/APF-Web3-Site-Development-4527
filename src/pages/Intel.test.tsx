import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Intel from './Intel';

// Mock PirateText to simplify testing and avoid any internal complexities of that component
vi.mock('../components/PirateText', () => ({
  PirateText: () => <span data-testid="pirate-text">Pirate</span>,
}));

describe('Intel Component', () => {
  it('renders the main heading and description', () => {
    render(<Intel />);

    // Check main heading text
    expect(screen.getByText(/News/i)).toBeInTheDocument();
    expect(screen.getByText(/\/\/ Intel/i)).toBeInTheDocument();

    // Check description
    expect(screen.getByText('Decentralized transmissions from the fleet.')).toBeInTheDocument();
  });

  it('renders the syncing status indicator', () => {
    render(<Intel />);

    expect(screen.getByText('Syncing IPFS nodes...')).toBeInTheDocument();
  });

  it('renders all news items with correct content', () => {
    render(<Intel />);

    // Check for specific news item titles
    expect(screen.getByText('Operation Data Sovereignty Launched')).toBeInTheDocument();
    expect(screen.getByText('Decentralized Identifiers (DIDs) Integration Complete')).toBeInTheDocument();
    expect(screen.getByText('Guild Muster: East Coast Division')).toBeInTheDocument();

    // Check for authors
    expect(screen.getByText('@GhostProtocol')).toBeInTheDocument();
    expect(screen.getByText('@CipherPunk')).toBeInTheDocument();
    expect(screen.getByText('@NeonSamurai')).toBeInTheDocument();

    // Check for timestamps
    expect(screen.getByText('T-12H')).toBeInTheDocument();
    expect(screen.getByText('T-24H')).toBeInTheDocument();
    expect(screen.getByText('T-48H')).toBeInTheDocument();

    // Check that all 3 decrypt buttons are present
    const decryptButtons = screen.getAllByRole('button', { name: /Decrypt and read full transmission/i });
    expect(decryptButtons).toHaveLength(3);
  });
});
