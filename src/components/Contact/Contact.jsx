import { FaUser, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css";
const { contactContainer, iconUser, iconPhone } = styles;

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={contactContainer}>
      <ul>
        <li>
          <p>
            <FaUser className={iconUser} /> {contact.name}
          </p>
        </li>
        <li>
          <p>
            <FaPhone className={iconPhone} />
            {contact.number}
          </p>
        </li>
      </ul>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>

    </div>
  );
};
export default Contact;
