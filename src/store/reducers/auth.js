import * as actions from "../actions";

const initialState = {};
export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SIGNUP_USER_PENDING:
          return {
            ...state,
            items: action.payload
          };
        case actions.SIGNUP_USER_FULFILLED:
          return {
            ...state,
            item: action.payload
          };
        case actions.SIGNUP_USER_REJECTED:
            return {
              ...state,
              item: action.payload
            };
        default:
          return state;
      }
}