import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../redux/contactsSlice';
import { setFilter } from '../redux/filterSlice';
import { GlobalStyle } from './GlobalStyle.styled';
import NewContactForm from './NewContactForm/NewContactForm';
import { ContactList } from './contacts/Contacts';
import Filter from './filter/Filter';

function App() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (value) => {
    dispatch(setFilter(value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <GlobalStyle />
      <div>
        <h1 style={{ marginBottom: '20px' }}>Phonebook</h1>
        <NewContactForm addContact={handleAddContact} />

        <h2 style={{ marginBottom: '10px' }}>Contacts</h2>
        <Filter setFilter={handleFilterChange} />

        <ContactList contacts={filteredContacts} deleteContact={handleDeleteContact} />
      </div>
    </div>
  );
}

export default App;







