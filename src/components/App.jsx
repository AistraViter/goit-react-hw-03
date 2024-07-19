import { useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import styles from "./App.module.css";

const contacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const { container, phonebookTitle } = styles;
  const [newContacts, setContacts] = useState(contacts);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formElements = evt.target.elements;
    const newContact = {
      id: nanoid(),
      name: formElements.name.value,
      number: formElements.number.value,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
    evt.target.reset();
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  const filteredContacts = newContacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={container}>
      <h1 className={phonebookTitle}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} deleteContact={deleteContact} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      
    </div>
  );
}

export default App;
