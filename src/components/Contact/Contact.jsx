import { BsFillTelephoneFill, BsPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <div className={css.contactCard}>
      <ul>
        <li className={css.contactData}>
          <BsPersonFill className={css.icon} />
          <p>{name}</p>
        </li>
        <li className={css.contactData}>
          <BsFillTelephoneFill className={css.icon} />
          <p> {number}</p>
        </li>
      </ul>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
