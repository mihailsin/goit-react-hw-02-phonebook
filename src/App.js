import React from 'react';
import './App.css';
import ContactForm from './Components/ContactForm';
class App extends React.Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
    );
  }
}

export default App;
