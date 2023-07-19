import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { ContactItem, DeleteButton } from "../contacts/Contacts.styled";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ul style={{ paddingLeft: "30px" }}>
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id}>
            <span style={{ marginRight: "10px" }}>
              {contact.name}: {contact.number}
            </span>
            <DeleteButton
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </DeleteButton>
          </ContactItem>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;




 





