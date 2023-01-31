import { fireEvent, render, screen } from "@testing-library/react";
import { BookingForm } from './BookingForm';

describe('BookingForm', () => {
    test('Renders the BookingForm heading', () => {
        const props = {
            availableTimes: [],
            occasion: "",
            noOfGuests: 1,
            reservationDate: "2023-01-31",
            dispatch: jest.fn(),
            handleChange: jest.fn(),
            handleSubmit: jest.fn()
        }
        render(<BookingForm {...props} />);
        const headingElement = screen.getAllByText("Reserve a table");
        expect(headingElement.length).toBe(2);
    });

    test('Renders the BookingForm', () => {
        const props = {
            availableTimes: [],
            occasion: "",
            noOfGuests: 1,
            reservationDate: "2023-01-31",
            dispatch: jest.fn(),
            handleChange: jest.fn(),
            handleSubmit: jest.fn()
        }
        render(<BookingForm {...props} />);
        const form = screen.getByTitle("booking form");
        expect(form).toBeInTheDocument();
    });

    test('Submits the BookingForm', () => {
        const props = {
            availableTimes: [],
            occasion: "",
            noOfGuests: 1,
            reservationDate: "2023-01-31",
            dispatch: jest.fn(),
            handleChange: jest.fn(),
            handleSubmit: jest.fn((e) => e.preventDefault())
        }
        render(<BookingForm {...props} />);
        const button = screen.getByText("Make Reservation");

        fireEvent(
            button,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        );
        expect(props.handleSubmit).toHaveBeenCalled();
    });
});