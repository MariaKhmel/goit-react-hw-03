import Contact from "../Contact/Contact";

const ContactList = ({ initialContacts }) => {
  return (
    <>
      <ul>
        {initialContacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact name={name} number={number} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
