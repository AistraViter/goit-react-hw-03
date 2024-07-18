import { useId } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const id = useId();
  const { contactForm } = styles;

  return (
    <form className={contactForm}>
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
          placeholder="123-456-7890" /* Додаємо зразок формату у плейсхолдер */
          name="number"
          required
        />
      </div>

      <button type="submit">Add contact</button>
    </form>
  );
};
export default ContactForm;
