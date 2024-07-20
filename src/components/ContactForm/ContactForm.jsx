import { useId } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./ContactForm.module.css";

const ContactForm = ({ handleSubmit }) => {
  const { contactForm } = styles;
  const id = useId();
  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form onSubmit={handleSubmit} className={contactForm}>
        <div>
          <label htmlFor={`contactFormName${id}`}>Name</label>
          <Field id={`contactFormName${id}`} type="text" name="name" required />
        </div>
        <div>
          <label htmlFor={`contactFormNumber${id}`}>Number</label>
          <Field
            id={`contactFormNumber${id}`}
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}"
            placeholder="000-000-00" /* Додаємо зразок формату у плейсхолдер */
            name="number"
            required
          />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
