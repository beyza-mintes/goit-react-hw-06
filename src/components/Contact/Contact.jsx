import React from 'react'
import { RiUser3Fill } from "react-icons/ri";
import { PiPhoneCallFill } from "react-icons/pi";
import styles from './Contact.module.css'

const Contact = ({ name, number, onDelete, id }) => {
    return (
        <div className={styles.contact}>
            <div>
                <div className={styles.contactItem}>
                    <RiUser3Fill />
                    <p className={styles.name}>{name}</p>
                </div>
                <div className={styles.contactItem}>
                    <PiPhoneCallFill />
                    <p className={styles.number}>{number}</p>
                </div>
            </div>

            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Contact