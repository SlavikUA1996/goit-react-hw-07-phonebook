import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/slice';
import { useGetContactsQuery, useDeleteContactMutation } from '../../redux/contactSlice';

import './ContactList.module.css';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts, isFetching } = useGetContactsQuery();
  const [deleteContact, ] = useDeleteContactMutation();



  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  }
  const filteredContacts = findContacts();

  return (
    <>  {isFetching && <p>Loading...</p>}
      {contacts && (
        <ul>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p>
                  {name}: {number}
                </p>
                <button type="button" onClick={() => {
                    deleteContact(id);
                  }}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )};
    </>
  )
};


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