import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MaskedInput from "react-text-mask";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      "Invalid phone number format! Should be like: 000-00-00"
    )
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ handleSubmit }) => {
  const { contactForm } = styles;
  const id = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={contactForm}>
        <div>
          <label htmlFor={`contactFormName${id}`}>Name</label>
          <Field id={`contactFormName${id}`} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={`contactFormNumber${id}`}>Number</label>
          <Field name="number">
            {({ field }) => (
              <MaskedInput
                {...field}
                mask={[/\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]}
                placeholder="000-00-00"
                id={`contactFormNumber${id}`}
                type="tel"
              />
            )}
          </Field>{" "}
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
