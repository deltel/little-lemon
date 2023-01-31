import { initializeTimes, updateTimes } from './BookingPage';

describe('BookingPage', () => {
    test('initializeTimes', () => {
        const date = "2023-01-31";
        const result = initializeTimes(date)
        expect(result.length).toBeGreaterThan(0);
    });
   
    test('updateTimes', () => {
        const date = "2023-01-31";
        const state = [];
        const action1 = { type: "GET_AVAILABLE_TIMES", payload: date };
        const action2 = { type: "", payload: date };
        const newState = updateTimes(state, action1);
        const emptyState = updateTimes(state, action2);
        expect(newState.length).toBeGreaterThan(0);
        expect(emptyState).toMatchObject([]);
    });

    test('read from local storage', () => {
        localStorage.setItem("data", "[]");
        const data = localStorage.getItem("data");
        const jsonData = JSON.parse(data);
        expect(jsonData).toMatchObject([]);
    });
    
    test('write to local storage', () => {
        const info = {
            occasion: "birthday",
            noOfGuests: 1,
            reservationDate: "2023-01-30",
            reservationTime: "17:00"
        };
        localStorage.setItem("data", "[]");
        let data = localStorage.getItem("data");
        const jsonData = JSON.parse(data);
        const newData = [ ...jsonData, info];
        localStorage.setItem("data", JSON.stringify(newData));
        data = localStorage.getItem("data");
        data = JSON.parse(data);
        expect(data).toMatchObject([info]);
    });
});