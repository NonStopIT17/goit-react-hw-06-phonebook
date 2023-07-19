import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { ContactForm } from "../NewContactForm/NewContactForm.styled";

function NewContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedNumber = number.trim();

    if (!trimmedName || !trimmedNumber) {
      alert("Please enter a name and a phone number!");
      return;
    }

    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (existingContact) {
      alert(`${trimmedName} is already in contacts!`);
      return;
    }

    const contact = {
      id: Date.now().toString(),
      name: trimmedName,
      number: trimmedNumber,
    };

    dispatch(addContact(contact));

    setName("");
    setNumber("");
  };

  return (
    <>
      <ContactForm onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <button type="submit">Add contact</button>
      </ContactForm>
    </>
  );
}

export default NewContactForm;









