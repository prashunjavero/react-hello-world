/* eslint-disable require-jsdoc */
export default function reducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_LOCATION':
      state.push(action.data);
      return state;
    default:
      return state;
  }
}
