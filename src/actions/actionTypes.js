/* eslint-disable require-jsdoc */
export const INCREMENT_VOTE_COUNT = 'INCREMENT_VOTE_COUNT';
export const DECREMENT_VOTE_COUNT = 'DECREMENT_VOTE_COUNT';
export const CREATE_LOCATION = 'CREATE_LOCATION';

export function incrementVoteForLocation(name) {
  return {
    type: INCREMENT_VOTE_COUNT,
    location: name
  };
}

export function decrementVoteForLocation(name) {
  return {
    type: DECREMENT_VOTE_COUNT,
    location: name
  };
}

export function createLocation(data) {
  return {
    type: CREATE_LOCATION,
    data: data
  };
}
