import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOperations";
import { Loading } from "notiflix";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const userSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        error: null,
        filter: ""
    },
    reducers: {
          filterContacts: (state, action) => {
            state.filter = action.payload;
          },
    },
    extraReducers: {
      [fetchContacts.pending](state){
        Loading.dots({
          svgColor: 'rgba(0,0,255)',
          svgSize: '200px',
        });
      },
      [fetchContacts.fulfilled](state, action) { 
        state.items = action.payload; 
        Loading.remove();
      },
      [fetchContacts.rejected](state, action) {
        state.error = action.payload;
        Loading.remove();
      },
      [addContact.pending](state){
        Loading.dots({
          svgColor: 'rgba(0,0,255)',
          svgSize: '200px',
        });
      },
      [addContact.fulfilled](state, action){
        state.items.push(action.payload);
        Loading.remove();
        Notify.success('Сontact added successfully', {position: 'center-top'});
      },
      [addContact.rejected](state, action){
        state.error = action.payload;
        Loading.remove();
        Notify.warning('Ooops, something wrong', {position: 'center-top'});
      },
      [deleteContact.pending](state){
        Loading.dots({
          svgColor: 'rgba(0,0,255)',
          svgSize: '200px',
        });
      },
      [deleteContact.fulfilled](state, action){
        state.items = state.items.filter(({ id }) => id !== action.meta.arg);
        Loading.remove();
        Notify.success('Сontact deleted successfully', {position: 'center-top'});
      },
      [deleteContact.rejected](state, action){
        state.error = action.payload;
        Loading.remove();
        Notify.warning('Ooops, something wrong', {position: 'center-top'});
      },
    },
});

export const { addNewContact, filterContacts } = userSlice.actions;
