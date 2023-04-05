// import necessary react testing library helpers here
// import the Counter component here

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

describe('Counter component', () => {

  test('renders counter message', () => {
    const { getByText } = render(<Counter />);
    const message = getByText(/Counter/i);
    expect(message).toBeInTheDocument();
  });

test('should render initial count with value of 0', () => {
    const { getByTestId } = render(<Counter />);
    const count = getByTestId('count');
    expect(count.textContent).toBe('0');
  });

test('clicking + increments the count', () => {
    const { getByText, getByTestId } = render(<Counter />);
    const incrementButton = getByText('+');
    const count = getByTestId('count');

    fireEvent.click(incrementButton);
    expect(count.textContent).toBe('1');

    fireEvent.click(incrementButton);
    expect(count.textContent).toBe('2');
  });

test('clicking - decrements the count', () => {
    const { getByText, getByTestId } = render(<Counter />);
    const decrementButton = getByText('-');
    const count = getByTestId('count');

    fireEvent.click(decrementButton);
    expect(count.textContent).toBe('-1');

    fireEvent.click(decrementButton);
    expect(count.textContent).toBe('-2');
  });
});
