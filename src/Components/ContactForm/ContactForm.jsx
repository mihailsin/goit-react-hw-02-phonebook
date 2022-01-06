import React from 'react';
import { Form, Label, Input, Button, Wrapper } from './ContactForm.styled';
class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  inputHandler = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  render() {
    return (
      <Form>
        <Wrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            onChange={this.inputHandler}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Label htmlFor="number">Number</Label>
          <Input
            id="number"
            onChange={this.inputHandler}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit">Add Contact</Button>
        </Wrapper>
      </Form>
    );
  }
}

export default ContactForm;
