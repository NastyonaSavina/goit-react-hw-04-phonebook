import { Component } from 'react';
import styles from '../ContactForm/ContactForm.module.css';



export class ContactForm extends Component {
    state = {
        name: '',
        number:'',
    };

    handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    };
    

    handleSubmit = event => {
    event.preventDefault();
        this.props.onContact(this.state);
        this.reset();

    };

    reset = () => {
        this.setState({  name: '', number:''});
    }

    render() {

    const { name, number } = this.state;

     return (
        <form  className={styles.form} onSubmit={this.handleSubmit}>
            <label className={styles.formItem}>
                <p>Name</p>
                <input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                />
            </label>

        
            <label className={styles.formItem}>
                <p>Number</p>
                <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}

                />
            </label>

            <button className={styles.btn} type="submit">
            Add contact
            </button>
        </form>
    )
}
   

   
}