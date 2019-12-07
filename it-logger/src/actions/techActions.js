import {
  ADD_TECH,
  TECHS_ERROR,
  DELETE_TECH,
  GET_TECHS,
  SET_LOADING
} from '../actions/types';

//get technicians from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  }
};

//Set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
