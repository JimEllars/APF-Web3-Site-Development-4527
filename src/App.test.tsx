import { render, screen } from '@testing-library/react';
import App from './App';
import { vi, describe, it, expect } from 'vitest';
import { Outlet, MemoryRouter } from 'react-router-dom';

// Mock the components so we can verify if they render without rendering all their internal logic
vi.mock('./components/MainLayout', () => ({
  default: () => {
    return (
      <div data-testid="main-layout">
        <Outlet />
      </div>
    );
  }
}));

vi.mock('./pages/Bridge', () => ({ default: () => <div data-testid="page-bridge" /> }));
vi.mock('./pages/Intel', () => ({ default: () => <div data-testid="page-intel" /> }));
vi.mock('./pages/TheCode', () => ({ default: () => <div data-testid="page-the-code" /> }));
vi.mock('./pages/MusterPoints', () => ({ default: () => <div data-testid="page-muster-points" /> }));
vi.mock('./pages/TheSignal', () => ({ default: () => <div data-testid="page-the-signal" /> }));
vi.mock('./pages/TheArmory', () => ({ default: () => <div data-testid="page-the-armory" /> }));
vi.mock('./pages/MusterRoll', () => ({ default: () => <div data-testid="page-muster-roll" /> }));

describe('App Router', () => {
  it('renders MainLayout and Bridge component on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('main-layout')).toBeInTheDocument();
    expect(screen.getByTestId('page-bridge')).toBeInTheDocument();
  });

  it('renders Intel component on /intel route', () => {
    render(
      <MemoryRouter initialEntries={['/intel']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-intel')).toBeInTheDocument();
  });

  it('renders TheCode component on /the-code route', () => {
    render(
      <MemoryRouter initialEntries={['/the-code']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-the-code')).toBeInTheDocument();
  });

  it('renders MusterPoints component on /muster-points route', () => {
    render(
      <MemoryRouter initialEntries={['/muster-points']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-muster-points')).toBeInTheDocument();
  });

  it('renders TheSignal component on /the-signal route', () => {
    render(
      <MemoryRouter initialEntries={['/the-signal']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-the-signal')).toBeInTheDocument();
  });

  it('renders TheArmory component on /the-armory route', () => {
    render(
      <MemoryRouter initialEntries={['/the-armory']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-the-armory')).toBeInTheDocument();
  });

  it('renders MusterRoll component on /muster-roll route', () => {
    render(
      <MemoryRouter initialEntries={['/muster-roll']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-muster-roll')).toBeInTheDocument();
  });

  it('renders unknown routes by not matching any specific route component', () => {
    // Note: react-router handles unknown routes depending on setup
    // Since there's no catch-all route inside the main layout, the layout won't render for unknown routes either since the route matches exactly paths under it unless configured otherwise
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.queryByTestId('main-layout')).not.toBeInTheDocument();
    expect(screen.queryByTestId('page-bridge')).not.toBeInTheDocument();
  });
});
