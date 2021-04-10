/* eslint-disable require-jsdoc */
import increment from '../actions/actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case increment.type:
      return state.count + 1;
    default:
      return state;
  }
}
