import { array, func, string } from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, filter, handleDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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

ContactList.propTypes = {
  contacts: array.isRequired,
  filter: string.isRequired,
  handleDelete: func.isRequired,
};
