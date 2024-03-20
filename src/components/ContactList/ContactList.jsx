import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact
              name={name}
              number={number}
              deleteContact={deleteContact}
              id={id}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
