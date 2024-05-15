import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from './Display';

// Helper function to render display and return useful elements
const renderDisplay = (value) => {
  const utils = render(<Display value={value} />);
  const displayElement = utils.getByText(new RegExp(value, 'i'));
  return { ...utils, displayElement };
};

test('Renders correctly with various values', () => {
  const values = ["123", "456", "789", "0", "ERROR"];
  values.forEach(value => {
    const { displayElement } = renderDisplay(value);
    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveTextContent(value);
  });
});

test('Handles maximum length value and displays "ERROR" correctly', () => {
  const maxValue = "123456789";
  const { getByText, rerender } = render(<Display value={maxValue} />);
  let displayElement = getByText(new RegExp(maxValue, 'i'));
  expect(displayElement).toBeInTheDocument();
  expect(displayElement).toHaveTextContent(maxValue);

  const errorValue = "ERROR";
  rerender(<Display value={errorValue} />);
  displayElement = getByText(new RegExp(errorValue, 'i'));
  expect(displayElement).toBeInTheDocument();
  expect(displayElement).toHaveTextContent(errorValue);
});

test('Displays "ERROR" for overly long values', () => {
  const longValue = "12345678901234567890";
  const { getByText } = render(<Display value={longValue} />);
  const displayElement = getByText(/ERROR/);
  expect(displayElement).toBeInTheDocument();
  expect(displayElement).toHaveTextContent("ERROR");
});

test('Displays "ERROR" for numbers greater than 999999999', () => {
  const largeNumber = "1000000000";
  const { getByText } = render(<Display value={largeNumber} />);
  const displayElement = getByText(/ERROR/);
  expect(displayElement).toBeInTheDocument();
  expect(displayElement).toHaveTextContent("ERROR");
});

test('Displays "ERROR" for non-numeric values', () => {
  const nonNumericValue = "non-numeric";
  const { getByText } = render(<Display value={nonNumericValue} />);
  const displayElement = getByText(/ERROR/);
  expect(displayElement).toBeInTheDocument();
  expect(displayElement).toHaveTextContent("ERROR");
});
