import { configureStore } from '@reduxjs/toolkit';

import navReducer from '../features/nav/navSlice';
import miniBlogReducer from '../features/miniBlog/miniBlogSlice';

export default configureStore({
  reducer: {
    nav: navReducer,
    miniBlog: miniBlogReducer
  }
});