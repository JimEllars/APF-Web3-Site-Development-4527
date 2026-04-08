import { render, screen } from '@testing-library/react';
import App from './App';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { Outlet } from 'react-router-dom';

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
  beforeEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('renders MainLayout and Bridge component on default route', () => {
    render(<App />);
    expect(screen.getByTestId('main-layout')).toBeInTheDocument();
    expect(screen.getByTestId('page-bridge')).toBeInTheDocument();
  });

  it('renders Intel component on /intel route', () => {
    window.history.pushState({}, '', '/intel');
    render(<App />);
    expect(screen.getByTestId('page-intel')).toBeInTheDocument();
  });

  it('renders TheCode component on /the-code route', () => {
    window.history.pushState({}, '', '/the-code');
    render(<App />);
    expect(screen.getByTestId('page-the-code')).toBeInTheDocument();
  });

  it('renders MusterPoints component on /muster-points route', () => {
    window.history.pushState({}, '', '/muster-points');
    render(<App />);
    expect(screen.getByTestId('page-muster-points')).toBeInTheDocument();
  });

  it('renders TheSignal component on /the-signal route', () => {
    window.history.pushState({}, '', '/the-signal');
    render(<App />);
    expect(screen.getByTestId('page-the-signal')).toBeInTheDocument();
  });

  it('renders TheArmory component on /the-armory route', () => {
    window.history.pushState({}, '', '/the-armory');
    render(<App />);
    expect(screen.getByTestId('page-the-armory')).toBeInTheDocument();
  });

  it('renders MusterRoll component on /muster-roll route', () => {
    window.history.pushState({}, '', '/muster-roll');
    render(<App />);
    expect(screen.getByTestId('page-muster-roll')).toBeInTheDocument();
  });
});
