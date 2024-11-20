// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  expect(screen.getByText(/1/i)).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  expect(screen.getByText(/-1/i)).toBeInTheDocument();
});

test('clicking + multiple times increments the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  expect(screen.getByText(/2/i)).toBeInTheDocument();
});

test('clicking - multiple times decrements the count', () => {
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);
  expect(screen.getByText(/-2/i)).toBeInTheDocument();
});

test('renders increment and decrement buttons', () => {
  expect(screen.getByText('+')).toBeInTheDocument();
  expect(screen.getByText('-')).toBeInTheDocument();
});


