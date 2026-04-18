import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MusterPoints from './MusterPoints';


describe('MusterPoints', () => {
  it('renders main headings and subtitle', () => {
    render(<MusterPoints />);

    // Main heading
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Events \/\/ Muster Points/);

    // Subtitle text
    expect(screen.getByText(/Regional staging groups and physical meetups./)).toBeInTheDocument();
  });

  it('renders the interactive map interface placeholder', () => {
    render(<MusterPoints />);

    // Map container role
    expect(screen.getByRole('img', { name: /Interactive map showing regional muster points/i })).toBeInTheDocument();

    // Loading texts
    expect(screen.getByText(/\[ Secure Map Interface Loading \]/i)).toBeInTheDocument();
    expect(screen.getByText(/Awaiting encrypted geolocation coordinates.../i)).toBeInTheDocument();
  });

  it('renders the guild assemblies correctly', () => {
    render(<MusterPoints />);

    // Cascadia Guild
    expect(screen.getByRole('heading', { name: /Cascadia Guild Assembly/i })).toBeInTheDocument();
    expect(screen.getByText(/Sector 4 \/\/ Seattle, WA/i)).toBeInTheDocument();

    // Liberty Guild
    expect(screen.getByRole('heading', { name: /Liberty Guild Assembly/i })).toBeInTheDocument();
    expect(screen.getByText(/Sector 1 \/\/ New York, NY/i)).toBeInTheDocument();
  });

  it('renders decrypt coordinates buttons', () => {
    render(<MusterPoints />);

    const button1 = screen.getByRole('button', { name: 'View Details for Cascadia Guild Assembly' });
    const button2 = screen.getByRole('button', { name: 'View Details for Liberty Guild Assembly' });

    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button1).toHaveTextContent(/Decrypt Coordinates/);
    expect(button2).toHaveTextContent(/Decrypt Coordinates/);
  });
});
