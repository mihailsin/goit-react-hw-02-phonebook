import propTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number }, idx) => {
        return (
          <li key={idx}>
            {name} : {number}
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
};

export default ContactList;
