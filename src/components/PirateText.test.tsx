import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PirateText } from './PirateText';

describe('PirateText', () => {
  it('renders the text "PIRATE"', () => {
    render(<PirateText />);
    // The component uses aria-label="Pirate" on the outer span
    const element = screen.getByLabelText('Pirate');
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe('PIRATE');
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-class';
    render(<PirateText className={customClass} />);
    const element = screen.getByLabelText('Pirate');
    expect(element).toHaveClass('inline-flex', 'items-center', customClass);
  });

  it('has correct accessibility attributes', () => {
    render(<PirateText />);
    const outerSpan = screen.getByLabelText('Pirate');

    // The inner span should be hidden from screen readers
    const innerSpan = outerSpan.querySelector('[aria-hidden="true"]');
    expect(innerSpan).toBeInTheDocument();
  });

  it('renders the stylized "I" correctly', () => {
    render(<PirateText />);
    const outerSpan = screen.getByLabelText('Pirate');
    const stylizedI = outerSpan.querySelector('.text-\\[\\#7100FF\\]');

    expect(stylizedI).toBeInTheDocument();
    expect(stylizedI).toHaveTextContent('I');
    expect(stylizedI).toHaveClass('inline-block', 'skew-x-[15deg]', 'scale-x-110', 'font-black');
  });
});
