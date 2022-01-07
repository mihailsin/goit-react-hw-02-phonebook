import React from 'react';
import './App.css';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
class App extends React.Component {
  state = {
    contacts: [],
  };
  contacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  recieveSubmittedData = data => {
    this.setState(prevState => {
      prevState.contacts.push(data);
    });
    console.log(this.state.contacts);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submitted={this.recieveSubmittedData} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
