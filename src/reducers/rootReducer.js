/* eslint-disable require-jsdoc */
export default function reducer(state = [], action) {
  let count = 0;
  switch (action.type) {
    case 'INCREMENT_VOTE_COUNT':
      count = localStorage.getItem(action.location);
      count = parseInt(count);
      ++count;
      localStorage.setItem(action.location, count);
      return state;
    case 'DECREMENT_VOTE_COUNT':
        count = localStorage.getItem(action.location);
        count = parseInt(count);
        if (count > 0){
          --count;
          localStorage.setItem(action.location, count);
        }
        return state;
    case 'CREATE_LOCATION':
      state.push(action.data);
      if(action.data){
        localStorage.setItem(action.data.name,0 );
      }
      return state;
    default:
      return state;
  }
}
