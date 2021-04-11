/* eslint-disable require-jsdoc */
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const CREATE_LOCATION = 'CREATE_LOCATION';

export default function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function createLocation(data) {
  return {
    type: CREATE_LOCATION,
    data: data
  };
}
