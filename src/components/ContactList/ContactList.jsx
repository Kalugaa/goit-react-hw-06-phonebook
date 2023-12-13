import { useDispatch, useSelector } from "react-redux";
import { deleteContactAction } from "store/contacts/contactsSlice";




const ContactList = (props) => {
  const filteredContacts = props.filteredContacts;
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts)

  const deleteContact = (id) => {
    dispatch(deleteContactAction(id))
  }


  return (
    <>
      <ul
        style={{
          margin: '0',
          padding: '0',
        }}
      >
        {filteredContacts === undefined && contacts && contacts.map(contact => (
          <li
            key={contact.id}
            style={{
              fontSize: '25px',
              display: 'flex',
              flexDirection: 'row',
              gap: '15px',
            }}
          >
            {contact.name} {contact.number}
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}

        {filteredContacts && filteredContacts.map(contact => (
          <li
            key={contact.id}
            style={{
              fontSize: '25px',
              display: 'flex',
              flexDirection: 'row',
              gap: '15px',
            }}
          >
            {contact.name} {contact.number}
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
