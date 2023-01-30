import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return filter.length > 0 ? (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: &nbsp;
          {contact.number}
          <button
            type="button"
            onClick={() => handleDelete(contact.id)}
            className={css.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: &nbsp;
          {contact.number}
          <button
            type="button"
            onClick={() => handleDelete(contact.id)}
            className={css.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
