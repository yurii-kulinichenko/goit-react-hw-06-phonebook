import { useSelector, useDispatch } from 'react-redux';

import { addContact } from 'redux/contactsSlice';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);

  const onSubmit = newContact => {
    if (
      contacts.find(contact =>
        contact.name.toLowerCase().includes(newContact.name.toLowerCase())
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }
    dispatch(addContact(newContact));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    onSubmit({ name, number });
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.input}
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.input}
      />
      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};
