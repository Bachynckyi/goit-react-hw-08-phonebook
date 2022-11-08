import { ContactItem } from "./ContactItem/ContactItem"
import css from './ContactList.module.css';
import theme from './ContactItem/ContactItem.module.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts  } from "redux/contacts/contactsOperations";
  
export const ContactList = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.contacts.items);
  const filterContacts = useSelector(state => state.contacts.filter);
  const filteredList = data.filter(contact => contact.name.toLowerCase().includes(filterContacts.toLowerCase()) ||
  contact.number.includes(filterContacts));
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [dispatch, token]);

  return (
        <ol className={css.contactList}>
            {filteredList.length !== 0 ? (
              filteredList.map(dataItem => {
              return (
              <ContactItem
                  key={dataItem.id}
                  id={dataItem.id}
                  name={dataItem.name}
                  number={dataItem.number}  
              />
              )}))
              : (<li className={theme.item}>There is no one contact</li>)}
        </ol>
  );
};


