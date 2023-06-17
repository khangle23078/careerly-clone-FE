import { IUser } from '@/interfaces/user';
import { createSlice } from '@reduxjs/toolkit';

interface authSliceState {
  data: IUser | null;
  isAuthentication: boolean;
  accessToken: string;
}

const initialState: authSliceState = {
  data: null,
  isAuthentication: false,
  accessToken: '',
};

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {},
});
