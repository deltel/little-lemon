import { initializeTimes, updateTimes } from './BookingPage';

describe('BookingPage', () => {
    const expectedState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    test('initializeTimes', () => {
        const date = "2023-01-31";
        const result = initializeTimes(date)
        expect(result).toMatchObject(expectedState);
    });
   
    test('updateTimes', () => {
        const date = "2023-01-31";
        const state = [];
        const action1 = { type: "GET_AVAILABLE_TIMES", payload: date };
        const action2 = { type: "", payload: date };
        const newState = updateTimes(state, action1);
        const emptyState = updateTimes(state, action2);
        expect(newState).toMatchObject(expectedState);
        expect(emptyState).toMatchObject([]);
    });
});