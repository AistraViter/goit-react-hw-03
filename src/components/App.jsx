import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import styles from "./App.module.css";

const savedContacts = JSON.parse(localStorage.getItem("saved-contacts"));

const contacts =
  savedContacts !== null
    ? savedContacts
    : [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];

function App() {
  const { container, phonebookTitle } = styles;
  const [newContacts, setContacts] = useState(contacts);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
    actions.resetForm();
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(newContacts));
  }, [newContacts]);

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
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
