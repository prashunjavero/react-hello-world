/* eslint-disable require-jsdoc */
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export default function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}
