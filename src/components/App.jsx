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
  const handleSumit = (evt) => {
    evt.preventDefault();
    const formElements = evt.target.elements;
    const newContact = {
      id: nanoid(),
      name: formElements.name.value,
      number: formElements.number.value,
    };
    console.log(newContact);
    contacts.push(newContact);
    evt.target.reset(); 
  };

  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  // Фільтрація контактів на основі введеного значення
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={container}>
      <h1 className={phonebookTitle}>Phonebook</h1>
      <ContactForm handleSumit={handleSumit} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList handleSumit={handleSumit} contacts={filteredContacts} />
    </div>
  );
}

export default App;
