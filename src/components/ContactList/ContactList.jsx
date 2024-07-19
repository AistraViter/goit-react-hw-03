import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
const {ContactListContainer } =styles;



const ContactList = ({ contacts, deleteContact }) => {
    return (
      <ul className={ContactListContainer}>
        {contacts.map((contact) => (
          <li key={contact.id}>
          <Contact contact={contact} deleteContact={deleteContact} />
          </li>
        ))}
      </ul>
    );
  };
  export default ContactList;


