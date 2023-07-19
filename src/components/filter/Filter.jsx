import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { FilterForm } from "../contacts/Contacts.styled";

function Filter() {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = React.useState("");

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    dispatch(setFilter(value));
  };

  return (
    <FilterForm>
      <label style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ marginBottom: "10px" }}>Find contacts by name</span>
        <input
          value={filterValue}
          onChange={handleFilterChange}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
    </FilterForm>
  );
}

export default Filter;






