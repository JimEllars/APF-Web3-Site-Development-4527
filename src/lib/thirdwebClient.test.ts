import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('thirdwebClient', () => {
  const originalEnv = { ...import.meta.env };

  beforeEach(() => {
    vi.resetModules();
    // Reset import.meta.env to original state
    Object.keys(import.meta.env).forEach(key => {
      delete import.meta.env[key];
    });
    Object.assign(import.meta.env, originalEnv);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('should throw error when VITE_THIRDWEB_CLIENT_ID is missing', async () => {
    // @ts-expect-error - manipulating env for testing
    import.meta.env.VITE_THIRDWEB_CLIENT_ID = undefined;

    await expect(import('./thirdwebClient')).rejects.toThrow('Missing VITE_THIRDWEB_CLIENT_ID environment variable');
  });

  it('should initialize client when VITE_THIRDWEB_CLIENT_ID is present', async () => {
    // @ts-expect-error - manipulating env for testing
    import.meta.env.VITE_THIRDWEB_CLIENT_ID = 'test-client-id';

    const mockCreateThirdwebClient = vi.fn().mockReturnValue({ id: 'mock-client' });
    vi.doMock('thirdweb', () => ({
      createThirdwebClient: mockCreateThirdwebClient,
    }));

    const { client } = await import('./thirdwebClient');

    expect(mockCreateThirdwebClient).toHaveBeenCalledWith({
      clientId: 'test-client-id',
    });
    expect(client).toEqual({ id: 'mock-client' });
  });
});
