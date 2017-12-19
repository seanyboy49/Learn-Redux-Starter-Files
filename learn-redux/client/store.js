import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import root reducer 
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// Create object for the default data 
// ES6 shortcut if property key = value
const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store) // browserHistory keeps track of navigating

export default store; // You can have one default export per file

 