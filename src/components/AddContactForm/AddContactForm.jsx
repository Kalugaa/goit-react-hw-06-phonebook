
import { useDispatch, useSelector } from "react-redux";
import { addContactAction } from "store/contacts/contactsSlice";

const AddContactForm = () => {

  const contacts = useSelector((state) => state.contacts)
  const dispatch = useDispatch()


  const addContact = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    if (contacts.length > 0) {
      const isNameUnique = contacts.every(
        contact => contact.name.toLowerCase() !== name.toLowerCase()
      );
      if (!isNameUnique) {
        alert("Це ім'я вже присутнє у вашій телефонній книзі!");
        return;
      }
    }
    const number = form.elements.number.value;
    dispatch(addContactAction({ name, number }))
    e.target.name.value = '';
    e.target.number.value = '';
  }

  return (
    <>
      <h1
        style={{
          margin: '10px 0 10px 0',
          fontSize: '35px',
        }}
      >
        Phonebook
      </h1>
      <form
        onSubmit={addContact}
        style={{
          fontSize: '15px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          border: 'black 1px solid',
          padding: '15px',
        }}

      >
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          Name
          <input type="text" name="name" required />
        </label>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          Number
          <input type="tel" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default AddContactForm;
