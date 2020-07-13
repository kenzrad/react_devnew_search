import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}
 
const reducers = combineReducers({
  search: searchReducer
});

const persistedReducer = persistReducer(persistConfig, reducers)

// the default serializableStateInvariant middleware throws an exception from redux-persist (although it performs as it should) - this middleware would not be included in prod environments
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware().concat(logger)
});

export const persistor = persistStore(store);

