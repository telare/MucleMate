import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Gender = "Male" | "Female";
type UserGoal = "Loose body fat" | "Gain mucles";
type PhysicalActivityLevel = 1 | 2 | 3 | 4 | 5;

export type User = {
  generalInfo: {
    id:string;
    name: string;
    email: string;
    gender: Gender;
    goal: UserGoal;
  };

  metrics: {
    age: number;
    height: number;
    weight: number;
    physicalActivityLevel: PhysicalActivityLevel;
  };
};

export type UserGeneralInfoKeys = keyof User["generalInfo"];
export type UserMetricsInfoKeys = keyof User["metrics"];

const initialState: User = {
  generalInfo: {
    id:"",
    name: "user",
    email: "user@example.com",
    gender: "Male",
    goal: "Gain mucles",
  },
  metrics: {
    age: 20,
    height: 190,
    weight: 100,
    physicalActivityLevel: 5,
  },
};
export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.generalInfo.id = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.generalInfo.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.generalInfo.email = action.payload;
    },
    setGender: (state, action: PayloadAction<Gender>) => {
      state.generalInfo.gender = action.payload;
    },
    setGoal: (state, action: PayloadAction<UserGoal>) => {
      state.generalInfo.goal = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.metrics.age = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.metrics.height = action.payload;
    },
    setWeight: (state, action: PayloadAction<number>) => {
      state.metrics.weight = action.payload;
    },
    setPhysicalActivityLevel: (
      state,
      action: PayloadAction<PhysicalActivityLevel>
    ) => {
      state.metrics.physicalActivityLevel = action.payload;
    },
    setAll: (state, action: PayloadAction<User>) => {
      state.generalInfo = action.payload.generalInfo;
      state.metrics = action.payload.metrics;
    },
    resetUser: () => initialState,
  },
});

const getAll = (state: RootState) => {
  return state.user;
};

const getGeneralInfo = (state: RootState) => {
  return state.user.generalInfo;
};

const getMetricsInfo = (state: RootState) => {
  return state.user.metrics;
};

export { getAll, getGeneralInfo, getMetricsInfo };

export const {
  setId,
  setName,
  setEmail,
  setGender,
  setGoal,
  setAge,
  setHeight,
  setWeight,
  setPhysicalActivityLevel,
  setAll,
  resetUser,
} = UserSlice.actions;
export default UserSlice.reducer;
