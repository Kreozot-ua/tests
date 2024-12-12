import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link to "elevators" test task', () => {
  render(<App />);
  const linkElement = screen.getByText(/Elevators/);
  expect(linkElement).toBeInTheDocument();
});
