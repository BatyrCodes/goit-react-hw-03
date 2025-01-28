import React, { useState, useEffect } from "react";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("contacts")) || [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");
  // Значение инпута
  const handleFilterChange = (value) => {
    setFilter(value);
  };
  // Проверяем к чувства регистра
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  // Уделяем контакты
  const delContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const addContact = (name, number) => {
    const duplicate = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicate) {
      alert(`${name} вже є у вашій книзі контактів!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <>
      <h1>Phone Book</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} delContact={delContact} />
    </>
  );
}

export default App;
