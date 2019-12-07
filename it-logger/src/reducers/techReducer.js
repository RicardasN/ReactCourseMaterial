import {
  ADD_TECH,
  TECHS_ERROR,
  DELETE_TECH,
  GET_TECHS,
  SET_LOADING
} from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [action.payload, ...state.techs],
        loading: false
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload.id),
        loading: false
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
