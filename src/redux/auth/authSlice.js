import { createSlice } from "@reduxjs/toolkit";
import authOperations from 'redux/auth/authOperations';
import { Loading } from "notiflix";


const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
      [authOperations.register.fulfilled](state,action) {
        Loading.dots({
          svgColor: 'rgba(0,0,255)',
          svgSize: '200px',
        });
      },
      [authOperations.register.fulfilled](state,action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        Loading.remove();
      },
      [authOperations.register.rejected](state,action){
        state.error = action.payload;
        Loading.remove();
      },
      [authOperations.logIn.pending](state,action) {
        Loading.dots({
          svgColor: 'rgba(0,0,255)',
          svgSize: '200px',
        });
      },
      [authOperations.logIn.fulfilled](state,action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        Loading.remove();
      },
      [authOperations.logOut.pending](state,action) {
        Loading.dots({
          svgColor: 'rgba(0,0,255)',
          svgSize: '200px',
        });
      },
      [authOperations.logOut.fulfilled](state,action) {
        state.user = {name: null, email: null};
        state.token = null;
        state.isLoggedIn = false;
        Loading.remove();
      },
    },
});

export const authReducer = authSlice.reducer;