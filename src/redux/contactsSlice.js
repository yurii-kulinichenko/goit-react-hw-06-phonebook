import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload
        );
        state.contacts.splice(index, 1);
      },
    },
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
