import React, { useEffect, useState } from 'react'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css'

const App = () => {

  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const localContact = JSON.parse(localStorage.getItem('contact')) || initialContacts;
  const [contacts, setContacts] = useState(localContact);

  // Arama durumunu ekliyoruz
  const [searchTerm, setSearchTerm] = useState('');

  // kullanıcının arama kutusuna girdiği değeri güncelliyor
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const normalizedSearchTerm = searchTerm.toLowerCase();

  // filtrelenmiş kişiler
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedSearchTerm)
  );

  // yeni kişi ekleyen fonksiyon
  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  // kişiyi silen fonksiyon
  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  // contacts her güncellendiğinde, localStorage'a kaydedilir
  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  return (

    <div className='App'>
      <h1>Phonebook</h1>
      <ContactForm className='ContactForm' onAddContact={addContact} />
      <SearchBox className='SearchBox' value={searchTerm} onChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;