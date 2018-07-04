import {
    RESET_COUNTER,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from "../constants/redux/counter";

export const resetCounter = () => ({
    type: RESET_COUNTER
});

export const incrementCounter = (count = 1) => ({
    type: INCREMENT_COUNTER,
    count
});

export const decrementCounter = (count = 1) => ({
    type: DECREMENT_COUNTER,
    count
});
