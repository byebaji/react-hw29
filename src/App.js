import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './App.css';

export const App = () => {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState('');
	const contacts = useSelector(state => state.contacts);
	const filter = useSelector(state => state.filter);

	const onPlus = () => {
		if (inputValue.trim()) {
			dispatch({
				type: 'plus',
				payload: {
					name: inputValue,
					id: Date.now(),
				},
			});
			setInputValue('');
		}
	};

	const onDelete = id => {
		dispatch({
			type: 'delete',
			payload: id,
		});
	};

	const onFilterChange = e => {
		dispatch({
			type: 'setFilter',
			payload: e.target.value,
		});
	};

	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<div className='App'>
			<div className='container'>
				<div className='input-group'>
					<input
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						placeholder='Імя контакту'
						className='input'
					/>
					<button onClick={onPlus} className='button'>
						Додати контакт
					</button>
					<input
						type='text'
						value={filter}
						onChange={onFilterChange}
						placeholder='Фільтр контактів'
						className='input'
					/>
				</div>

				<div className='contacts-list'>
					<h2>Список контактів:</h2>
					<ul>
						{console.log(contacts)}
						{filteredContacts.map(contact => (
							<li key={contact.id} className='contact-item'>
								<span>{contact.name}</span>
								<button
									onClick={() => onDelete(contact.id)}
									className='delete-button'
								>
									Видалити
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default App;
