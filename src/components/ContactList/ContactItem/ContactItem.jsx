import PropTypes from 'prop-types';
import scss from './ContactItem.module.scss';
import { useDispatch } from 'react-redux';
import * as operations from 'redux/contacts/contactsOperations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={scss.item}>
      <div>
        <b><span>{name}:</span></b>
        <span className={scss.number}>{number}</span>
      </div>
      <button className={scss.butonDelete} type='button' onClick={() => {
        dispatch(operations.deleteContact(id))
        }}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};


