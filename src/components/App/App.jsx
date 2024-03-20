import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import contacts from "../../contacts.json";
import { useEffect, useState } from "react";

function App() {
  const [filter, setFilter] = useState("");
  const [contactsList, setContacts] = useState(contacts);
  const [dd, setFilteredContacts] = useState(contactsList);

  useEffect(() => {
    const loweredcaseInputValue = filter.toLowerCase();
    const filteredContacts = [...contactsList].filter(({ name }) =>
      name.toLowerCase().includes(loweredcaseInputValue)
    );
    setFilteredContacts(filteredContacts);
  }, [contactsList, filter]);

  const onInputChange = (inputValue) => {
    setFilter(inputValue);
  };

  const onFormSumbit = (entrie) => setContacts([...contactsList, entrie]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onFormSumbit={onFormSumbit} />
      <SearchBox filterValue={filter} onInputChange={onInputChange} />
      <ContactList initialContacts={contactsList} />
    </div>
  );
}

export default App;
