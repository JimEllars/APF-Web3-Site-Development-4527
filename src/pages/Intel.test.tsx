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

    // Check for news item contents
    expect(screen.getByText(/The APF has officially initiated the first phase of our core network rollout/i)).toBeInTheDocument();
    expect(screen.getByText(/Members can now register their DIDs to the Federation Ledger/i)).toBeInTheDocument();
    expect(screen.getByText(/All available operatives in Sector 1 are requested to muster/i)).toBeInTheDocument();

    // Check for authors
    expect(screen.getByText('@GhostProtocol')).toBeInTheDocument();
    expect(screen.getByText('@CipherPunk')).toBeInTheDocument();
    expect(screen.getByText('@NeonSamurai')).toBeInTheDocument();

    // Check for timestamps
    expect(screen.getByText('T-12H')).toBeInTheDocument();
    expect(screen.getByText('T-24H')).toBeInTheDocument();
    expect(screen.getByText('T-48H')).toBeInTheDocument();

    // Check for accessibility and correctness of elements
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(3);

    expect(articles[0]).toHaveAttribute('aria-label', 'News article: Operation Data Sovereignty Launched');
    expect(articles[1]).toHaveAttribute('aria-label', 'News article: Decentralized Identifiers (DIDs) Integration Complete');
    expect(articles[2]).toHaveAttribute('aria-label', 'News article: Guild Muster: East Coast Division');

    // Check that all 3 decrypt buttons are present and have specific labels
    const decryptButtons = screen.getAllByRole('button', { name: /Decrypt and read full transmission/i });
    expect(decryptButtons).toHaveLength(3);
    expect(decryptButtons[0]).toHaveAttribute('aria-label', 'Decrypt and read full transmission: Operation Data Sovereignty Launched');
  });
});
