import { fireEvent, render, screen } from "@testing-library/react";
import { BookingForm } from './BookingForm';

describe('BookingForm', () => {
    const props = {
        availableTimes: [],
        occasion: "",
        noOfGuests: 0,
        reservationDate: "",
        errors: {},
        touched: {},
        isSubmitting: false,
        dispatch: jest.fn(),
        handleChange: jest.fn(),
        handleBlur: jest.fn(),
        handleSubmit: jest.fn((e) => e.preventDefault())
    };

    beforeEach(() => {
        render(<BookingForm {...props} />);
    });

    test('Renders the BookingForm heading', () => {
        const headingElement = screen.getAllByText("Reserve a table");
        expect(headingElement.length).toBe(2);
    });

    test('Renders the BookingForm', () => {
        const form = screen.getByTitle("booking form");
        expect(form).toBeInTheDocument();
    });

    test('Submits the BookingForm', () => {
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
    
    test('Fields have the required attributes', () => {
        const occasionSelect = screen.getByLabelText("Occasion");
        const dateInput = screen.getByLabelText("Choose date");
        const timeSelect = screen.getByLabelText("Choose time");
        const numberInput = screen.getByLabelText("Number of guests");

        expect(occasionSelect.getAttributeNames()).toEqual(
            expect.arrayContaining(["class", "name", "id", "required"])
        );
        expect(dateInput.getAttributeNames()).toEqual(
            expect.arrayContaining(["class", "type", "name", "id", "required"])
        );
        expect(timeSelect.getAttributeNames()).toEqual(
            expect.arrayContaining(["class", "name", "id", "required"])
        );
        expect(numberInput.getAttributeNames()).toEqual(
            expect.arrayContaining(["class", "type", "name", "id", "min", "max", "required"])
        );
    });
    
    test('Occasion select has the correct attribute values', () => {
        const occasionSelect = screen.getByLabelText("Occasion");

        expect(occasionSelect.getAttribute("class")).toBe("");
        expect(occasionSelect.getAttribute("name")).toBe("occasion");
        expect(occasionSelect.getAttribute("id")).toBe("occasion");
    });
    
    test('Date input has the correct attribute values', () => {
        const dateInput = screen.getByLabelText("Choose date");

        expect(dateInput.getAttribute("class")).toBe("");
        expect(dateInput.getAttribute("name")).toBe("reservationDate");
        expect(dateInput.getAttribute("id")).toBe("reservationDate");
        expect(dateInput.getAttribute("type")).toBe("date");
    });
    
    test('Time selec has the correct attribute values', () => {
        const timeSelect = screen.getByLabelText("Choose time");

        expect(timeSelect.getAttribute("class")).toBe("");
        expect(timeSelect.getAttribute("name")).toBe("reservationTime");
        expect(timeSelect.getAttribute("id")).toBe("reservationTime");
    });
    
    test('Number input has the correct attribute values', () => {
        const numberInput = screen.getByLabelText("Number of guests");

        expect(numberInput.getAttribute("class")).toBe("");
        expect(numberInput.getAttribute("name")).toBe("noOfGuests");
        expect(numberInput.getAttribute("id")).toBe("noOfGuests");
        expect(numberInput.getAttribute("type")).toBe("number");
    });
});