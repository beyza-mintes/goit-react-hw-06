import React from 'react'
import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'


const ContactList = ({ contacts, onDelete }) => {
    return (
        <div className={styles.contactlist}>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <Contact
                            name={contact.name}
                            number={contact.number}
                            id={contact.id}
                            onDelete={onDelete}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList