import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('Firebase Initialization', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('should initialize successfully', async () => {
    vi.doMock('firebase/app', () => ({
      initializeApp: vi.fn().mockReturnValue({ name: 'mockApp' }),
    }));
    vi.doMock('firebase/firestore', () => ({
      getFirestore: vi.fn().mockReturnValue({ type: 'mockDb' }),
      collection: vi.fn(),
      doc: vi.fn(),
    }));

    const { db } = await import('./firebase');
    expect(db).toEqual({ type: 'mockDb' });
  });

  it('should use mock instance when initialization fails', async () => {
    vi.doMock('firebase/app', () => ({
      initializeApp: vi.fn().mockImplementation(() => {
        throw new Error('Firebase mock error');
      }),
    }));
    vi.doMock('firebase/firestore', () => ({
      getFirestore: vi.fn(),
      collection: vi.fn(),
      doc: vi.fn(),
    }));

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const { db } = await import('./firebase');

    expect(consoleSpy).toHaveBeenCalledWith(
      'Firebase initialization failed. Using mock instance for development.',
      expect.any(Error)
    );
    expect(db).toEqual({});

    consoleSpy.mockRestore();
  });
});
