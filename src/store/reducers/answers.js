import * as actions from "../actions";

const initialState = [];
export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_ANSWERS:
          return action.payload
        default:
          return state;
      }
}