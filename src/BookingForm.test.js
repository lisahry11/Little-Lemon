import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from './components/BookingForm.js';
import {updateTimes} from './pages/BookingPage.js';


const mockTimes = ["10:00 AM", "11:00 AM", "12:00 PM"];

describe('bookingForm component testing', () =>{

    test('Renders the BookingForm heading', () => {
        render(
          <MemoryRouter>                                    {/*MUST ADD MEMORYROUTER*/}
            <BookingForm times={mockTimes} />
          </MemoryRouter>
        );
        const headingElement = screen.getByText("BOOK NOW!!");
        expect(headingElement).toBeInTheDocument();
      });

describe('updateTimes function', () => {
    it('should update times for weekend', () => {
        const initialState = [];
        const action = { type: 'UPDATED_TIMES', date: '2024-07-21' }; // A Saturday

        const newState = updateTimes(initialState, action);
        expect(newState).toEqual(['5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30']);
    });

    it('should update times for weekday', () => {
        const initialState = [];
        const action = { type: 'UPDATED_TIMES', date: '2024-07-23' }; // A Monday

        const newState = updateTimes(initialState, action);
        expect(newState).toEqual(['5:00', '5:30', '6:00', '6:30', '7:00', '7:30']);
    });

    // Test case for 'RESET_TIMES' action
    it('should reset times to initial state', () => {
        const currentState = ['5:00', '5:30', '6:00'];
        const action = { type: 'RESET_TIMES' };

        const newState = updateTimes(currentState, action);
        expect(newState).toEqual([]);
    });

    // Test case for default action (should return current state)
    it('should return current state for unknown action', () => {
        const currentState = ['5:00', '5:30', '6:00'];
        const action = { type: 'UNKNOWN_ACTION' };

        const newState = updateTimes(currentState, action);
        expect(newState).toEqual(currentState);
    });
});
});