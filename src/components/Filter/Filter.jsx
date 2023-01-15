import { func } from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onChange }) => {
  return <input type="text" onChange={onChange} className={css.filter} />;
};

Filter.propTypes = {
  onChange: func.isRequired,
};
