// import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
}
);

// como era antigamente
// export const store = createStore(rootReducer, applyMiddleware(logger));