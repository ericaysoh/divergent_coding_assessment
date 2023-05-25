import { render, screen } from '@testing-library/react';
import Home from './Components/Home';
import { BrowserRouter as Router } from 'react-router-dom';

// test('renders learn react link', () => {
//   render(<Home />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });




test('Button should exist', () => {
  // Render the component
  render(
    <Router>
      <Home />
    </Router>
  );

  // Find the button by its role
  const buttonElement = screen.getByRole('button');

  // Assert the button's existence
  expect(buttonElement).toBeInTheDocument();
});
