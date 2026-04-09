import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Bridge from './Bridge';

describe('Bridge', () => {
  it('renders main headings and text', () => {
    render(
      <MemoryRouter>
        <Bridge />
      </MemoryRouter>
    );

    // Main heading
    expect(screen.getByText(/The New/)).toBeInTheDocument();
    expect(screen.getByText(/Paradigm/)).toBeInTheDocument();

    // Description text
    expect(screen.getByText(/Reclaiming digital sovereignty. The American/)).toBeInTheDocument();
    expect(screen.getByText(/Foundation is building the decentralized future./)).toBeInTheDocument();
  });

  it('renders navigation links with correct destinations', () => {
    render(
      <MemoryRouter>
        <Bridge />
      </MemoryRouter>
    );

    const enlistLink = screen.getByRole('link', { name: /Enlist Now/i });
    expect(enlistLink).toBeInTheDocument();
    expect(enlistLink).toHaveAttribute('href', '/muster-roll');

    const manifestoLink = screen.getByRole('link', { name: /Read Manifesto/i });
    expect(manifestoLink).toBeInTheDocument();
    expect(manifestoLink).toHaveAttribute('href', '/intel');
  });
});
