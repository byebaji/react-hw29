import { createStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

const initialState = {
	contacts: [],
	filter: '',
};

export const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
