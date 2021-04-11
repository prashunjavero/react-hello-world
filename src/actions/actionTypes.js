/* eslint-disable require-jsdoc */
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const CREATE_LOCATION = 'CREATE_LOCATION';

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
