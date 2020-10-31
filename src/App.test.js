import { render, screen } from '@testing-library/react';
import App from './App';

test('renders scoreboard react text', () => {
  render(<App />);
  const textElement = screen.getByText(/Scoreboard/i);
  expect(textElement).toBeInTheDocument();
});
