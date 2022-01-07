const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }, idx) => {
        return <li key={idx}>{name}</li>;
      })}
    </ul>
  );
};

export default ContactList;
