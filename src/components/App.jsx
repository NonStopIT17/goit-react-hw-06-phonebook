import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "./redux/store";
import { updateFilter } from "./redux/filterSlice";
import { ContactList } from "../components/contacts/Contacts";
import { GlobalStyle } from "./GlobalStyle.styled";
import NewContactForm from "./NewContactForm/NewContactForm";
import Filter from "../components/filter/Filter";

const App = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");

    if (storedContacts) {
      dispatch(addContact(JSON.parse(storedContacts)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (contact) => {
    const isContactExists = contacts.some(
      (existingContact) =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContactExists) {
      alert(`${contact.name} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(),
        name: contact.name,
        number: contact.number,
      };

      dispatch(addContact(newContact));
    }
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (value) => {
    dispatch(updateFilter(value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <GlobalStyle />
      <div>
        <h1 style={{ marginBottom: "20px" }}>Phonebook</h1>
        <NewContactForm addContact={handleAddContact} />

        <h2 style={{ marginBottom: "10px" }}>Contacts</h2>
        <Filter setFilter={handleFilterChange} />

        <ContactList
          contacts={filteredContacts}
          deleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default App;








