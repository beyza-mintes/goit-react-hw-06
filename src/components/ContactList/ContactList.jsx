import React from 'react'
import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact, selectContacts } from '../../redux/contactsSlice';


const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <div className={styles.contactlist}>
            {contacts.length === 0 ? (
                <p>No contacts found.</p>
            ) : (
                <ul>
                    {contacts.map(contact => (
                        <li key={contact.id}>
                            <Contact
                                name={contact.name}
                                number={contact.number}
                                id={contact.id}
                                onDelete={() => handleDelete(contact.id)}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ContactList;