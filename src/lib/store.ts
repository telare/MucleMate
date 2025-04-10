import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./features/userSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      user: UserSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
