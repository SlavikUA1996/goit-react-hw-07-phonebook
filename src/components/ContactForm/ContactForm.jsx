import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
// import {
//   useGetContactsQuery,
//   useAddContactMutation,
// } from '../../redux/contactSlice'
// import { nanoid } from 'nanoid';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, addContact } from '../../redux/slice';

import './ContactForm.module.css';

export const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  //  const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();

  // const handleChange = event => {
  //   console.log(event.target.value, event.target.name);
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
    
  //   const enterContacts = contacts.some(
  //     contact =>
  //       (contact.name === name.toLowerCase() && contact.number === number) ||
  //       contact.number === number
  //   );
  //   enterContacts
  //     ? alert(`${name} or ${number} is already in contacts`)
  //     : dispatch(addContact(contact));

  //   setName('');
  //   setNumber('');
  // };
const [name, setName] = useState('');
  const [number, setNumber] = useState('');
const dispatch = useDispatch();
  const items = useSelector(getContacts);
  // const { data: contacts } = useGetContactsQuery();
  // const [addContact] = useAddContactMutation();
  

   const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
   const handleSubmit = async event => {
     event.preventDefault();
       const form = event.currentTarget;
    const contact = [...items];
  if (contact.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContacts({ name: name, phone: number }));
    }

    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
       
      />
      <input
        type="tel"
        name="number"
       value={number}
        onChange={handleChange}
        placeholder="number"
        
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

// ContactForm.prototypes = {
//   name: PropTypes.string,
//   number: PropTypes.number,
//   onSubmit: PropTypes.func,
// };

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={this.handleChange}
//           placeholder="Name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         <input
//           type="tel"
//           name="number"
//           value={number}
//           onChange={this.handleChange}
//           placeholder="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />

//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// ContactForm.prototypes = {
//   name: PropTypes.string,
//   number: PropTypes.number,
//   onSubmit: PropTypes.func
// };