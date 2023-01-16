import PropTypes from 'prop-types';

import { ContactItem } from '../ContactList/ContactItem'

export const ContactList = ({ contacts, onDelete }) => {


    return <ul>
        {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
        )
                
        )}
       
        </ul>
   
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
    onDelete: PropTypes.func.isRequired,
}