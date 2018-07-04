// import * as dataActions from "../actions/data";

const initialState = {
    records: [1, 2, 4]
};
const data = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
};

export default data;
