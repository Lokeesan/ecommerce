import {createSlice} from '@reduxjs/toolkit';

type UserType = {
  id?: string;
  email?: string;
  fullName?: string;
  isVerified?: boolean;
};

type AuthType = {
  user: UserType | null;
  token: string | null;
  type?: 'guest' | 'loginUser';
  isLoading: boolean;
};

const initialState: AuthType = {
  user: null,
  token: null,
  isLoading: true,
  type: 'guest',
};

export const authStateSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {payload} = action;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
    },

    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    guestUser: state => {
      state.token = null;
      state.user = null;
      state.type = 'guest';
    },
    clearUser: state => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser, clearUser, updateUser, updateToken} =
  authStateSlice.actions;

export default authStateSlice.reducer;
