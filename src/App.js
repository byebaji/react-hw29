import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import './App.css';

export const App = () => {
	return (
		<div className='App'>
			<div className='container'>
				<div className='input-group'>
					<ContactForm />
					<div className='line'></div>
					<Filter />
				</div>
				<ContactList />
			</div>
		</div>
	);
};

export default App;
