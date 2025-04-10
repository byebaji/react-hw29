import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import './Filter.css';

export const Filter = () => {
	const dispatch = useDispatch();

	const handleChange = e => {
		dispatch(setFilter(e.target.value));
	};

	return (
		<div className='filter-container'>
			<input
				type='text'
				onChange={handleChange}
				placeholder='Фільтр контактів'
				className='inputFilter'
			/>
		</div>
	);
};
