import {
  CATS_ERROR,
  CATS_FETCHING,
  CATS_LOADING,
  CATS_SUCCESS
} from "../constants/redux/cats";

const initialState = {
  animals: [],
  loading: false,
  error: null
};
const cats = (state = initialState, action) => {
  switch (action.type) {
    case CATS_ERROR:
      return { ...state, error: action.error, loading: false };
    case CATS_LOADING:
      return { ...state, loading: true, error: null };
    case CATS_SUCCESS:
      console.log("action", action);
      return {
        ...state,
        loading: false,
        error: false,
        animals: [...state.animals, action.payload.img]
      };
    default:
      return state;
  }
};

export default cats;
