import * as uiActions from "../constants/redux/ui";

const lightTheme = {
    name: "light Theme",
    background: "white",
    color: "black"
};

const darkTheme = {
    name: "dark Theme",
    background: "black",
    color: "white"
};

const initialState = lightTheme;

const ui = (state = initialState, action) => {
    switch (action.type) {
        case uiActions.TOGGLE_THEME:
            return state === lightTheme ? darkTheme : lightTheme;
        default:
            return state;
    }
};

export default ui;
