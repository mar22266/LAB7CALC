import { test, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Renders correctly', () => {
  const { container } = render(<Button value="1" onClick={() => {}} />);
  expect(container).toBeInTheDocument();
});

test('Displays the correct value', () => {
  const { getByText } = render(<Button value="1" onClick={() => {}} />);
  const buttonElement = getByText(/1/i);
  expect(buttonElement).toBeInTheDocument();
});

test('Calls onClick function when clicked', () => {
  const handleClick = vi.fn();
  const { getByText } = render(<Button value="5" onClick={handleClick} />);
  const buttonElement = getByText(/5/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(handleClick).toHaveBeenCalledWith('5');
});
