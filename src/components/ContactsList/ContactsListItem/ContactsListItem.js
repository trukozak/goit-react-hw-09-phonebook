import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactOperation } from '../../../redux/contacts/contactsOperations';
import { ContactsListItemStyled } from './ContactsListItemStyled';

const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeleteItem = () => {
    dispatch(deleteContactOperation(id));
  };

  return (
    <ContactsListItemStyled>
      <li>
        {name}
        <span>: </span>
        {number}
        <button className="btnDelete" type="button" onClick={onDeleteItem}>
          Delete
        </button>
      </li>
    </ContactsListItemStyled>
  );
};

export default ContactsListItem;
