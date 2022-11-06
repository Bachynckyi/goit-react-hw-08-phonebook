import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (token) => {
  try {
    const contacts = await axios.get('/contacts');
    return contacts.data;
  }
  catch(error) {
    return error;
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newState => {
    try {
      const contact = await axios.post('/contacts', newState);
      return contact.data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const deletedcontact = await axios.delete(`/contacts/${contactId}`);
      return deletedcontact.id;
    } catch (error) {
      return error;
    }
  }
);

