import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    // contacts: [],
    name: "",
    number: "",
  };
  // randomId = uuidv4();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.props.onClick(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const randomId = uuidv4();

    return (
      <form onSubmit={this.handleSubmit} className={styles.contactsForm}>
        <label htmlFor={randomId} className={styles.nameLabel}>
          Name
          <input
            className={styles.nameInput}
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            id={randomId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor={randomId} className={styles.numberLabel}>
          Number
          <input
            className={styles.numberInput}
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            id={randomId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button
          onClick={this.handleSubmit}
          type="button"
          className={styles.addingBatton}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
