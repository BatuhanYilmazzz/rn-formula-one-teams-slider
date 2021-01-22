import * as actionTypes from '../actionTypes';

const initialState = {
  homeData: [],
  error: null,
  loading: true,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOME_SUCCESS:
      return {
        ...state,
        homeData: action.payload.data,
        loading: false,
      };
    case actionTypes.FETCH_HOME_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default homeReducer;
