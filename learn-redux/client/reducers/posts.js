// a reducer takes in two things

// 1. The action (info about what happened)
// 2. A copy of current state

function posts (state = [], action) {// set state to be an empty array
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing likes!")
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i],likes: state[i].likes + 10 },
        ...state.slice(i+1) // after the one we are updating
      ]
    default:
      return state;
  }
  return state;
} 

export default posts
