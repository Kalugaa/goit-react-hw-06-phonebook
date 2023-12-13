import AddContactForm from './AddContactForm/AddContactForm';
import ContactsSearch from './ContactsSearch/ContactsSearch';
import ContactList from './ContactList/ContactList';
import Section from './Contacts/Contacts';
import { useSelector } from 'react-redux';


const App = () => {

  const filter = useSelector((state) => state.filter)
  const contacts = useSelector((state) => state.contacts)


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',
        paddingLeft: '25px',
      }}
    >
      <AddContactForm />
      <Section title={'Contacts'}>
        <ContactsSearch />
        {contacts && filter === '' && <ContactList />}
        {filter.length > 0 && (
          <ContactList filteredContacts={filteredContacts} />
        )}
      </Section>
    </div>
  );
};

export default App;
