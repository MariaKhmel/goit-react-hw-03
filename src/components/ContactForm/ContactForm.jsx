import { nanoid } from "nanoid";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const initialFormValues = { name: "", number: "" };

const schema = Yup.object({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const ContactForm = ({ onFormSumbit }) => {
  const onHandleForm = (values) => {
    const { name, number } = values;
    onFormSumbit({
      id: nanoid(),
      name,
      number,
    });
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values, { resetForm }) => {
        onHandleForm(values);
        resetForm();
      }}
      validationSchema={schema}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name">
            {(msg) => <div className={css.error}>{msg}</div>}
          </ErrorMessage>
        </label>
        <label htmlFor="number">
          Number
          <Field type="number" name="number" />
          <ErrorMessage name="number">
            {(msg) => <div className={css.error}>{msg}</div>}
          </ErrorMessage>
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

//  { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" }
