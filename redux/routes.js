import * as ActionTypes from './ActionTypes';

export const routes = (state = {
    isLoading: true,
    errMess: null,
  }, action) => {
  switch (action.type) {

    case ActionTypes.ROUTES_LOADING:
      return {...state, isLoading: true, errMess: null, routes: []}

    case ActionTypes.ROUTES_FAILED:
      return {...state, isLoading: false, errMess: action.payload};

    default:
      return state;
    }
};