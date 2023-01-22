import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return <input type="text" onChange={onFilterChange} className={css.filter} />;
};
