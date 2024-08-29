import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { goitApi } from "../../config/goItApi";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("users/signup", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
