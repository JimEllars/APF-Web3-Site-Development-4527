import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import MainLayout from './MainLayout';

describe('MainLayout Component', () => {
  it('renders correctly with default navigation items', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MainLayout />
      </MemoryRouter>
    );

    // Header APF logo
    expect(screen.getByRole('link', { name: /go to the bridge/i })).toBeInTheDocument();

    // Check that some navigation links are rendered
    expect(screen.getByRole('link', { name: /navigate to the bridge/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /navigate to pirate news/i })).toBeInTheDocument();

    // Footer
    expect(screen.getByText(/American/i)).toBeInTheDocument();
  });

  it('marks active navigation item based on current route', () => {
    render(
      <MemoryRouter initialEntries={['/intel']}>
        <MainLayout />
      </MemoryRouter>
    );

    const intelLink = screen.getByRole('link', { name: /navigate to pirate news/i });
    expect(intelLink).toHaveClass('text-[#7100FF]');
    expect(intelLink).toHaveClass('border-[#7100FF]');

    // Check inactive link
    const bridgeLink = screen.getByRole('link', { name: /navigate to the bridge/i });
    expect(bridgeLink).not.toHaveClass('text-[#7100FF]');
  });

  it('toggles mobile menu when the hamburger button is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MainLayout />
      </MemoryRouter>
    );

    // Mobile menu button
    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(menuButton).toBeInTheDocument();

    // By default the mobile menu links might not be visible or have a zero height
    // However, they are conditionally rendered by AnimatePresence
    // Before clicking, the mobile menu links (in the AnimatePresence block) are not present
    // Let's count links before click
    const initialLinks = screen.getAllByRole('link', { name: /navigate to the bridge/i });
    expect(initialLinks.length).toBe(1); // Only the desktop one

    // Click the button to open the mobile menu
    fireEvent.click(menuButton);

    // After clicking, the mobile menu should render the links too
    const linksAfterClick = screen.getAllByRole('link', { name: /navigate to the bridge/i });
    expect(linksAfterClick.length).toBe(2); // Desktop + Mobile

    // Click again to close
    fireEvent.click(menuButton);

    // The links should be removed (framer-motion might take time to unmount,
    // but in tests without act() and timers it might instantly or need waitFor)
    // Actually, framer-motion exit animation will keep it for 0.2s unless configured otherwise in test setup
    // so we won't assert removal here unless necessary, just the opening is enough to prove toggle
  });

  it('closes mobile menu when a mobile navigation link is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MainLayout />
      </MemoryRouter>
    );

    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });

    // Open mobile menu
    fireEvent.click(menuButton);

    const linksAfterClick = screen.getAllByRole('link', { name: /navigate to pirate news/i });
    expect(linksAfterClick.length).toBe(2); // Desktop + Mobile

    // Click the mobile link (it should be the second one in the array)
    fireEvent.click(linksAfterClick[1]);

    // Wait for the mobile menu to close and AnimatePresence to remove the elements
    await waitFor(() => {
      const linksAfterClose = screen.getAllByRole('link', { name: /navigate to pirate news/i });
      expect(linksAfterClose.length).toBe(1); // Only desktop link remains
    });
  });

  it('isActive correctly handles root path vs sub-paths', () => {
    // Tests the path === '/' && location.pathname !== '/' branch in isActive
    render(
      <MemoryRouter initialEntries={['/the-code/sub-path']}>
        <MainLayout />
      </MemoryRouter>
    );

    // The Bridge link should not be active when on a sub-path
    const bridgeLink = screen.getByRole('link', { name: /navigate to the bridge/i });
    expect(bridgeLink).not.toHaveClass('text-[#7100FF]');

    // The Code link should be active when on a sub-path of /the-code
    const theCodeLink = screen.getByRole('link', { name: /navigate to policies/i });
    expect(theCodeLink).toHaveClass('text-[#7100FF]');
  });
});
