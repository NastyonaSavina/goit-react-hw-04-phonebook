import PropTypes from 'prop-types';

import styles from '../ContactList/ContactList.module.css';


export const ContactItem = ({ contact, onDelete }) => {
    const { id, name, number } = contact;
         
        const handleDelete = () => {
            onDelete(id);
        };

        return (<li className={styles.contactItem}>
                <p>{name} : {number}</p>
                <button
                    type="button"
                    className={styles.btn}
                    onClick={handleDelete}>             
                Delete
                </button>
            </li>
        );
}

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired

        }).isRequired,
    onDelete: PropTypes.func.isRequired,
}