// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import musicReducer from '../reducers/musicReducer'; // cambia in base al percorso

const store = configureStore({
  reducer: {
    music: musicReducer, // chiave "music" come usato in useSelector
  },
});

export default store;
