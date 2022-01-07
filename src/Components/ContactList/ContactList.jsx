import propTypes from 'prop-types';

const ContactList = ({ contacts, deleteHandler }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            {name} : {number}
            <button
              onClick={() => {
                deleteHandler(id);
              }}
              type="button"
            >
              X
            </button>
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
