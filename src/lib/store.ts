import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./features/userSlice";


const rootReducer = combineReducers({
  user: UserSlice.reducer,
});


export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
