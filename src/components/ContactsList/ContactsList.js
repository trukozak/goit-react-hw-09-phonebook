import React from 'react';
import ContactsListItem from './ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';
import {
  getContactsFiltered,
  getLoadings,
} from '../../redux/contacts/contactsSelector';
import { AppLoader } from '../Loader/Loader';

const ContactsList = () => {
  const contacts = useSelector(getContactsFiltered);
  const loading = useSelector(getLoadings)
  return (
    <>
      {loading ? (
        <>
          <AppLoader />
          <h2>Loading Contacts...</h2>
        </>
      ) : (
        <ul>
          {contacts.map(contact => (
            <ContactsListItem key={contact.id} {...contact} id={contact.id} />
          ))}
        </ul>
      )}
    </>
  );
};


export default ContactsList;
