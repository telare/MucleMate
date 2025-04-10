import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Gender = "male" | "female";
type UserGoal = "Loose body fat" | "Gain mucles";
type UserMetrics = {
  gender: Gender;
  goal: UserGoal;
  age: number;
  height: number;
  weight: number;
  physicalActivityLevel: number;
};
type User = {
  name: string;
  email: string;
};

const initialState: User & UserMetrics = {
  name: "",
  email: "",
  gender: "male",
  goal: "Gain mucles",
  age: 0,
  height: 0,
  weight: 0,
  physicalActivityLevel: 1,
};
export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setGender: (state, action: PayloadAction<Gender>) => {
      state.gender = action.payload;
    },
    setGoal: (state, action: PayloadAction<UserGoal>) => {
      state.goal = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    setWeight: (state, action: PayloadAction<number>) => {
      state.weight = action.payload;
    },
    setPhysicalActivityLevel: (state, action: PayloadAction<number>) => {
      state.physicalActivityLevel = action.payload;
    },
    resetUser: () => initialState,
  },
});

export const {
  setName,
  setEmail,
  setGender,
  setGoal,
  setAge,
  setHeight,
  setWeight,
  setPhysicalActivityLevel,
  resetUser,
} = UserSlice.actions;
export default UserSlice.reducer;
