import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Common motion component mock factory
const createMotionComponent = (tag: string) => {
  return React.forwardRef(({ children, className, ...props }: Record<string, unknown>, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { initial, animate, exit, variants, transition, whileHover, whileTap, whileInView, viewport, ...rest } = props;
    return React.createElement(tag, { className, ref, ...rest }, children as React.ReactNode);
  });
};

// Mock framer-motion globally to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: createMotionComponent('div'),
    article: createMotionComponent('article'),
    section: createMotionComponent('section'),
    main: createMotionComponent('main'),
    button: createMotionComponent('button'),
    a: createMotionComponent('a'),
    span: createMotionComponent('span'),
    h1: createMotionComponent('h1'),
    h2: createMotionComponent('h2'),
    h3: createMotionComponent('h3'),
    p: createMotionComponent('p'),
    img: createMotionComponent('img'),
    ul: createMotionComponent('ul'),
    li: createMotionComponent('li'),
    nav: createMotionComponent('nav'),
    header: createMotionComponent('header'),
    footer: createMotionComponent('footer'),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
}));
