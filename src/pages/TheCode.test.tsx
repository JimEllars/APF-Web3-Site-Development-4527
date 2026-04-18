import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TheCode from './TheCode';


describe('TheCode Component', () => {
  it('renders the header correctly', () => {
    render(<TheCode />);
    expect(screen.getByText(/Policies/i)).toBeInTheDocument();
    expect(screen.getByText(/The Code/i)).toBeInTheDocument();
    expect(screen.getByText(/Legislative drafts and active voting/i)).toBeInTheDocument();
  });

  it('renders the list of policies', () => {
    render(<TheCode />);
    expect(screen.getByText('Consumer Data Sovereignty Act')).toBeInTheDocument();
    expect(screen.getByText('Open Source Initiative Funding')).toBeInTheDocument();
    expect(screen.getByText('Federation Charter v1.2')).toBeInTheDocument();
  });

  it('renders correct statuses', () => {
    render(<TheCode />);
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Drafting')).toBeInTheDocument();
    expect(screen.getByText('Passed')).toBeInTheDocument();
  });

  it('renders action buttons with correct text', () => {
    render(<TheCode />);
    expect(screen.getByText('Cast Vote')).toBeInTheDocument();
    expect(screen.getAllByText('View Detail').length).toBe(2);
  });
});
