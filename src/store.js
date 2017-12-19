// Create store

// createStore allows us to export the creation of the store.
import { createStore } from 'redux';
// The reducer is needed to create the store.
import reducer from './ducks/reducer';

export default createStore(reducer);

