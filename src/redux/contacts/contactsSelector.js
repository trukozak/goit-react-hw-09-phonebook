import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.items.contacts;
export const getFilters = state => state.items.filter;
export const getLoadings = state => state.items.loading;

export const getContactsFiltered = createSelector(
  [getContacts, getFilters],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
