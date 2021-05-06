import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import contacts from "./contacts.json";
import styles from "./App.module.css";

class Phonebook extends Component {
  state = {
    contacts: contacts,
    filter: "",
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  handleBtnClick = ({ name, number }) => {
    if (
      this.state.contacts.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts!`);
    } else {
      const contact = {
        id: uuidv4(),
        name: name,
        number: number,
      };
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
    console.log(e);
  };

  getFilteredItems = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredItems();

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm
          onClick={this.handleBtnClick}
          onSubmit={this.formSubmitHandler}
        />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default Phonebook;
