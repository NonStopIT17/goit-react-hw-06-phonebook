import React, { useState } from "react";
import PropTypes from "prop-types";
import { FilterForm } from "../contacts/Contacts.styled";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";

const NewContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" || number.trim() === "") {
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    dispatch(addContact(newContact));
    setName("");
    setNumber("");
  };

  return (
    <FilterForm>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Number:
          <input type="text" value={number} onChange={handleNumberChange} />
        </label>
        <br />
        <button type="submit">Add Contact</button>
      </form>
    </FilterForm>
  );
};

NewContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default NewContactForm;





