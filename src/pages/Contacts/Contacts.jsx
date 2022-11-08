import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/Contactlist";
import { Filter } from "components/Filter/Filter";

export const Contacts = () => {
      return (
          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h2 style={{marginTop: '10px', marginBottom: '10px', fontSize: 30, color: "grey",}}>Please add contact</h2>
            <ContactForm/>
            <h3 style={{marginTop: '10px', marginBottom: '10px', fontSize: 30, color: "#0000ff",}}>Your contacts</h3>
            <Filter/>
            <ContactList/> 
          </div>
      );
};

export default Contacts;