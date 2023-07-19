import React from "react";
import { useSelector } from "react-redux";
import {
  Phonebook,
  MainTitle,
  ContactTitle,
  TotalContactText,
} from './App.styled';
import GlobalStyles from './GlobalStyle.styled';
import NewContactForm from "./NewContactForm/NewContactForm";
import Contacts from "./contacts/Contacts";
import Filter from "./filter/Filter";

export default function App() {
  const contacts = useSelector(state => state.contacts);

  return (
    <Phonebook>
      <MainTitle>Phonebook</MainTitle>
      <NewContactForm />
      <ContactTitle>Contacts</ContactTitle>

      <TotalContactText>Total contacts: {contacts.length}</TotalContactText>
      <Filter />
      <Contacts />

      <GlobalStyles />
    </Phonebook>
  );
}
















