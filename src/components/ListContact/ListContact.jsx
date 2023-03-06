import ListModule from './ListContact.module.css';
import AddIcon from '../Icons/AddIcon.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'components/redux/contactsSelector';
import { removeContacts } from 'components/redux/sliceContacts';

export const ListContact = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  return (
    <ul className={ListModule.list}>
      {contacts && contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <li key={id} className={ListModule.item}>
            <button
              type="button"
              className={ListModule.removeButton}
              onClick={() => dispatch(removeContacts(id))}
              aria-label="Delete contact"
            >
              <AddIcon width="45" height="45" />
            </button>
            {name + ': ' + number}
          </li>
        ))
      ) : (
        <p className={ListModule.alert}>Sorry! You have no contacts created.</p>
      )}
    </ul>
  );
};
