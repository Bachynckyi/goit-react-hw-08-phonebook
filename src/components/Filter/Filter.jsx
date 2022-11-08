import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
    return (
      <div className={css.SearchBox}>
            <h4 className={css.SearchBox_label}>You can find contacts by name or number</h4>
            <input
              className={css.SearchBox_input}
              type="text"
              placeholder="Please enter name"
              value={filter}
              onChange={e => dispatch(filterContacts(e.currentTarget.value))}
            >
            </input>
      </div>
    );
  };
