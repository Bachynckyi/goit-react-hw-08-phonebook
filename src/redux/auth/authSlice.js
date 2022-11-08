import { createSlice } from "@reduxjs/toolkit";
import authOperations from 'redux/auth/authOperations';
import { Loading } from "notiflix";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
      [authOperations.register.pending](state,action) {
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
        Notify.success('Sign Up is succesfull.', {position: 'center-top'});
      },
      [authOperations.register.rejected](state,action){
        state.error = action.payload;
        Loading.remove();
        Notify.warning('Ooops, something wrong. Please try again with another email.', {position: 'center-top'});
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
        Notify.success('Sign In is succesfull.', {position: 'center-top'});
      },
      [authOperations.logIn.rejected](state,action) {
        Loading.remove();
        Notify.warning('Ooops, something wrong. Please try again.', {position: 'center-top'});
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
        Notify.success('Log Out is succesfull.', {position: 'center-top'});
      },
      [authOperations.logOut.rejected](state,action) {
        Loading.remove();
        Notify.warning('Ooops, something wrong. Please try again.', {position: 'center-top'});
      },
      [authOperations.fetchCurrentUser.pending](state,action) {
        state.isRefreshing = true;
        Loading.dots({
          svgColor: 'rgba(0,0,255)',
          svgSize: '200px',
        })
      },
      [authOperations.fetchCurrentUser.fulfilled](state, action) {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        Loading.remove();
      },
      [authOperations.fetchCurrentUser.rejected](state, action) {
        state.isRefreshing = false;
        Loading.remove();
      }
    },
});

export const authReducer = authSlice.reducer;