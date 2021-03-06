import {ActionTypes} from './action';
const initialState = {
  city: `Paris`,
  offers: [],
  sort: `Popular`
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CURRENT_CITY_ENTER:
      return {
        ...state,
        city: action.payload
      };
    case ActionTypes.OFFERS_CREATOR:
      return {
        ...state,
        offers: action.payload
      };
    case ActionTypes.OFFERS_SORT:
      return {
        ...state,
        sort: action.payload
      };
    case ActionTypes.SET_ID:
      return {
        ...state,
        id: action.payload
      };
  }
  return state;
};
export default reducer;
