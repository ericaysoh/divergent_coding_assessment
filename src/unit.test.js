import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter, useLocation, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AddShelf from './Components/AddShelf';


describe('Unit test', () => {

  describe('Home test', () => {
    
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
  });



  describe('AddShelf test', () => {
    
    const MockLocationProvider = ({ children, location }) => (
      <MemoryRouter initialEntries={[location]}>
        <Routes>

        <Route path="*" component={() => children} />
        </Routes>
      </MemoryRouter>
    );

    test('renders with a mock location state', () => {
      const mockLocation = {
        pathname: '/addshelf',
        state: {
          warehouse_name: 'warehouseName', 
          warehouse_id: 127
        },
      };
   

      render(
        <MockLocationProvider location={mockLocation}>
          <AddShelf />
        </MockLocationProvider>
      );
      

    // test('renders new input field on button click', () => {


    // // Initially, there should be no input fields
    // const inputFields = screen.getByPlaceholderText('new shelf name here');
    // expect(inputFields.length).toBe(0);
    
      // Find and click the button
      const button = screen.getByTestId('addshelfbtn');
      fireEvent.click(button);

      // // After the button click, there should be one input field rendered
      // const inputField = screen.getByLabelText('Input Field');
      // expect(inputField).toBeInTheDocument();

      // Click the button again
      fireEvent.click(button);

      // After the second button click, there should be two input fields rendered
      const inputFieldsAfterSecondClick = screen.getByPlaceholderText('new shelf name here');
      expect(inputFieldsAfterSecondClick.length).toBe(2);

    });
  });

})
