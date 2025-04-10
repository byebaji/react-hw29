import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import './ContactForm.css';

export const ContactForm = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (name.trim() && number.trim()) {
			dispatch(
				addContact({
					name: name,
					number: number,
					id: Date.now(),
				})
			);
			setName('');
			setNumber('');
		}
	};

	return (
		<form onSubmit={handleSubmit} className='contact-form'>
			<div className='input-group-contact'>
				<input
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder='Імя контакту'
					className='input'
					required
				/>

				<input
					type='number'
					value={number}
					onChange={e => setNumber(e.target.value)}
					placeholder='Номер телефону'
					className='input'
					required
				/>
			</div>

			<button type='submit' className='button'>
				Додати контакт
			</button>
		</form>
	);
};
