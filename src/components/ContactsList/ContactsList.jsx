import PropTypes from 'prop-types';
import {
  Container,
  Item,
  Text,
  Btn,
  PersonOutline,
  CallOutline,
} from './ContactsList.stylid';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <Container>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Text>
          <PersonOutline size={22} />
          {name}: <CallOutline size={22} />
          {number}
        </Text>
        <Btn type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Btn>
      </Item>
    ))}
  </Container>
);

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
