import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TheArmory from './TheArmory';

describe('TheArmory', () => {
  it('renders the main heading and description', () => {
    render(<TheArmory />);

    expect(screen.getByText(/Shop/)).toBeInTheDocument();
    expect(screen.getByText(/\/\/ The Armory/)).toBeInTheDocument();
    expect(screen.getByText(/Equip yourself. Web3-enabled storefront for merch and digital assets./)).toBeInTheDocument();
  });

  it('renders all shop items with their correct details', () => {
    render(<TheArmory />);

    const expectedItems = [
      { name: 'Federation Hoodie', priceEth: '0.05 ETH', priceUsd: '$120' },
      { name: 'Sovereign Node Case', priceEth: '0.12 ETH', priceUsd: '$280' },
      { name: 'Data Laborer Tee', priceEth: '0.02 ETH', priceUsd: '$45' },
      { name: 'APF Genesis NFT', priceEth: '0.50 ETH', priceUsd: '$1150' },
    ];

    expectedItems.forEach(item => {
      const button = screen.getByRole('button', { name: `View ${item.name}` });
      expect(button).toBeInTheDocument();

      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.priceEth)).toBeInTheDocument();
      expect(screen.getByText(item.priceUsd)).toBeInTheDocument();
    });

    // Check statuses specifically
    const inStockBadges = screen.getAllByLabelText('Status: In Stock');
    expect(inStockBadges).toHaveLength(2);

    const preOrderBadge = screen.getByLabelText('Status: Pre-order');
    expect(preOrderBadge).toBeInTheDocument();

    const mintingLiveBadge = screen.getByLabelText('Status: Minting Live');
    expect(mintingLiveBadge).toBeInTheDocument();
  });

  it('verifies that items can be focused and clicked (though actual action not yet implemented)', () => {
    render(<TheArmory />);

    const firstItem = screen.getByRole('button', { name: 'View Federation Hoodie' });

    // Simulate interaction to verify it doesn't crash
    firstItem.focus();
    expect(firstItem).toHaveFocus();

    fireEvent.click(firstItem);
  });
});
