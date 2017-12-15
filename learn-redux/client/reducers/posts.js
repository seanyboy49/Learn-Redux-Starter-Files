// a reducer takes in two things

// 1. The action (info about what happened)
// 2. A copy of current state

function posts (state = [], action) {// set state to be an empty array
  console.log("This is posts.");
  console.log(state, action);
  return state;
} 

export default posts
