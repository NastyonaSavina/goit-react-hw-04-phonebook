import { useState } from 'react';
import styles from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';



export function ContactForm({ formSubmitHandler } ) {
    const [newName, setNewName]= useState('');
    const [newNumber, setNewNumber] = useState('');
    

    const handleChange = event => {
        const { name, value } = event.target;
        
        switch (name) {
            case 'name':
                setNewName(value);
                break;
            case 'number':
                setNewNumber(value);
                break;
            default: console.warn(`This type ${name} is not processed `)
        
        }


    };
    

    const handleSubmit = event => {
        event.preventDefault();
        formSubmitHandler(newName, newNumber);
        reset();

    };

    const reset = () => {
        setNewName('');
        setNewNumber('');
    }



   return (
        <form  className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.formItem}>
                <p>Name</p>
                <input
                type="text"
                name="name"
                value={newName}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
                />
            </label>

        
            <label className={styles.formItem}>
                <p>Number</p>
                <input
                type="tel"
                name="number"
                value={newNumber}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}

                />
            </label>

            <button className={styles.btn} type="submit">
            Add contact
            </button>
        </form>
    ) 
    
}

ContactForm.propTypes = {
    formSubmitHandler: PropTypes.func.isRequired,

}
