import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/Contactlist";
import { Filter } from "components/Filter/Filter";

export const Contacts = () => {
      return (
          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h1 style={{marginTop: '20px', marginBottom: '20px'}}>Phonebook</h1>
            <ContactForm/>
            <h2 style={{marginTop: '20px', marginBottom: '20px'}}>Contacts</h2>
            <Filter/>
            <ContactList/> 
          </div>
      );
    };