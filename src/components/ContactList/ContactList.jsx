import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import './ContactList.css';

export const ContactList = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(state => state.contacts.contacts);
	const filter = useSelector(state => state.contacts.filter);

	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<div className='contacts-list'>
			<h2>Список контактів:</h2>
			<ul>
				{filteredContacts.map(contact => (
					<li key={contact.id} className='contact-item'>
						<div className='contact-info'>
							<span className='contact-name'>{contact.name}</span>
							<span className='contact-number'>{contact.number}</span>
						</div>
						<button
							onClick={() => dispatch(deleteContact(contact.id))}
							className='delete-button'
						>
							Видалити
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
