import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from './redux/contactsSlice';
import { selectNameFilter } from './redux/filtersSlice';

const filterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = filterContacts(contacts, filter);
  const dispatch = useDispatch();

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  console.log('Contacts:', contacts);
  console.log('Filtered:', filteredContacts);
  console.log('Filter:', filter);

  return (
    <div className='generalContainer'>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;