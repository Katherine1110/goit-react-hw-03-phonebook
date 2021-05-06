import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  console.log(contacts);

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li
          className={styles.contactListItem}
          key={id}
          id={id}
          name={name}
          number={number}
        >
          {name}
          {number}
          <button
            className={styles.contactListButton}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
