import axios from "axios";

import {
  CATS_ERROR,
  CATS_FETCHING,
  CATS_LOADING,
  CATS_SUCCESS
} from "../constants/redux/cats";

export const catsLoading = () => ({
  type: CATS_LOADING
});

export const catsError = (error = "meow") => ({
  type: CATS_ERROR,
  error
});

export const catsSuccess = data => ({
  type: CATS_SUCCESS,
  payload: data
});

export const catsFetching = () => {
  return function(dispatch) {
    dispatch(catsLoading());
    return axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(res => {
        console.log("res.data", res.data);
        return dispatch(catsSuccess({ img: res.data.message }));
      })
      .catch(err => {
        return dispatch(catsError(err.message));
      });
  };
};
