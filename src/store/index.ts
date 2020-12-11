import {
    combineReducers,
    configureStore,
  } from "@reduxjs/toolkit";
  import favourites from "./favourites";
  
  const rootReducer = combineReducers({
    favourites: favourites.reducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });
  
  export type RootState = ReturnType<typeof rootReducer>;
  export { store };
  