import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { StrictMode } from 'react';
import { ThirdwebProvider } from 'thirdweb/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

// Set up environment variable before any imports that might need it
vi.stubEnv('VITE_THIRDWEB_CLIENT_ID', 'test-client-id');

// Mock dependencies
const mockRender = vi.fn();
const mockCreateRoot = vi.fn(() => ({
  render: mockRender,
}));

vi.mock('react-dom/client', () => ({
  createRoot: mockCreateRoot,
}));

vi.mock('./lib/thirdwebClient.ts', () => ({
  client: {},
}));

// Mock getElementById
const mockGetElementById = vi.spyOn(document, 'getElementById');

describe('main.tsx', () => {
  let rootElement: HTMLElement;

  beforeEach(() => {
    // Setup the DOM root element before importing main.tsx
    rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);

    // Ensure document.getElementById returns our mocked element
    mockGetElementById.mockReturnValue(rootElement);

    // Clear mocks
    vi.clearAllMocks();
    vi.resetModules();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    mockGetElementById.mockReset();
  });

  it('renders the App component within required providers', async () => {
    // Dynamically import main.tsx to trigger the rendering logic
    await import('./main.tsx');

    // Verify createRoot was called with the root element
    expect(mockGetElementById).toHaveBeenCalledWith('root');
    expect(mockCreateRoot).toHaveBeenCalledWith(rootElement);

    // Verify render was called
    expect(mockRender).toHaveBeenCalledOnce();

    // Verify the render argument (the React element tree)
    const renderArgument = mockRender.mock.calls[0][0];

    // Assert the component structure
    expect(renderArgument.type).toBe(StrictMode);

    const thirdwebProvider = renderArgument.props.children;
    expect(thirdwebProvider.type).toBe(ThirdwebProvider);

    const browserRouter = thirdwebProvider.props.children;
    expect(browserRouter.type).toBe(BrowserRouter);

    const app = browserRouter.props.children;
    // Instead of Object.is equality, compare the names as the dynamically
    // imported App may have a different reference than the one imported statically
    expect(app.type.name).toBe(App.name);
  });
});
