import {useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { getContacts, getFilter} from 'redux/selectors';
// import { getFilter } from '../../redux/slice';
// import { useGetContactsQuery, useDeleteContactMutation } from '../../redux/contactSlice';

import './ContactList.module.css';

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

export const ContactList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContacts(id));

  



  // const findContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   if (contacts) {
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter)
  //     );
  //   }
  // }
  // const filteredContacts = findContacts();

  
   return (
    <>  
      {contacts && (
        <ul>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p>
                  {name}: {number}
                </p>
                <button type="button" onClick={() => {
                    handleDelete(id);
                  }}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )};
    </>
 )}
 



//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);

//   const findContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }
  
//   const filteredContacts = findContacts();
    
//   return (
//     <ul>
//       {filteredContacts.map(({ id, name, number }) => {
//         return (
//           <li key={id}>
//             <p>
//               {name}: {number}
//             </p>
//             <button type="button" onClick={() => dispatch(deleteContact(id))}>
//               Delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// } 

// ContactList.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
//   id: PropTypes.string,
//   deleteContact: PropTypes.func
// };