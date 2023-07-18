import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "../redux/contactsSlice";
import { setFilter } from "../redux/filterSlice";
import { ContactList } from "../components/contacts/Contacts";
import GlobalStyle from "./GlobalStyle.styled";
import ContactForm from "./NewContactForm/NewContactForm";
import Filter from "../components/filter/Filter";
import { Phonebook, MainTitle, ContactTitle, TotalContactText } from './App.styled';

function App() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");

    if (storedContacts) {
      dispatch(addContact(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (contact) => {
    const isContactExists = contacts.some(
      (existingContact) =>
        existingContact.name && existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContactExists) {
      alert(`${contact.name} is already in contacts`);
    } else {
      dispatch(addContact(contact));
    }
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (value) => {
    dispatch(setFilter(value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Phonebook>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm addContact={handleAddContact} />

      <ContactTitle>Contacts</ContactTitle>
      <TotalContactText>Total contacts: {filteredContacts.length}</TotalContactText>
      <Filter setFilter={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        deleteContact={handleDeleteContact}
      />
      <GlobalStyle />
    </Phonebook>
  );
}

export default App;














