import { createSlice } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(contact => contact.id !== id);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export default contactsSlice.reducer;