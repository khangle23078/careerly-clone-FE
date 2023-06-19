import { signUp } from '@/api/auth';
import { IUser } from '@/interfaces/user';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface authSliceState {
  data: IUser | null;
  isAuthentication: boolean;
  error: string | undefined;
  accessToken: string;
}

export const signup = createAsyncThunk(
  'auth/Signup',
  async (userData: any, { rejectWithValue }) => {
    try {
      const { data } = await signUp(userData);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const initialState: authSliceState = {
  data: null,
  isAuthentication: false,
  error: undefined,
  accessToken: '',
};

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.error = undefined;
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
