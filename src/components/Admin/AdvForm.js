import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactOperations,
  fetchContactsOperations,
} from '../../redux/contacts/contactsOperations';
import { getContacts } from '../../redux/contacts/contactsSelector';
import { ThemeContext } from '../App';
import { AdvFormStyled } from './AdvForm.Styled';

const initialState = {
  name: '',
  number: '',
};
const AdvForm = () => {
  const { theme } = useContext(ThemeContext);

  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContactsOperations());
  }, [dispatch]);

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    const sameContactName = contacts.find(
      contact => contact.name.toLowerCase() === state.name.toLowerCase(),
    );
    if (sameContactName) {
      return alert(`${state.name} is already in contacts.`);
    }

    dispatch(
      addContactOperations({
        ...state,
      }),
    );
    setState({ ...initialState });
  };

  return (
    <AdvFormStyled colors={theme.colors}>
      <form onSubmit={onHandleSubmit}>
        <label>
          Name
          <input
            className="inputName"
            type="text"
            name="name"
            pattern="^[A-ZA-ZА-ЯА-Я]+(([' -][A-ZA-ZА-ЯА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={state.name}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Number
          <input
            className="inputName"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={state.number}
            onChange={onHandleChange}
          />
        </label>
        <button type="submit" className="btnAdd">
          Add contact
        </button>
      </form>
    </AdvFormStyled>
  );
};

export default AdvForm;
