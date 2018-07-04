import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    RESET_COUNTER
} from "../constants/redux/counter";

const initialState = {
    count: 0
};
const data = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { count: state.count + 1 };
        case DECREMENT_COUNTER:
            return { count: state.count - 1 };
        case RESET_COUNTER:
            return initialState;
        default:
            return state;
    }
};

export default data;
