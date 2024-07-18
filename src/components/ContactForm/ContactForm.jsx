import { useId } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({ handleSumit }) => {
  const { contactForm } = styles;
  const id = useId();

  return (
    <form onSubmit={handleSumit} className={contactForm}>
      <div>
        <label htmlFor={`contactFormName${id}`}>Name</label>
        <input id={`contactFormName${id}`} type="text" name="name" required />
      </div>
      <div>
        <label htmlFor={`contactFormNumber${id}`}>Number</label>
        <input
          id={`contactFormNumber${id}`}
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="000-000-0000" /* Додаємо зразок формату у плейсхолдер */
          name="number"
          required
        />
      </div>

      <button type="submit">Add contact</button>
    </form>
  );
};
export default ContactForm;
