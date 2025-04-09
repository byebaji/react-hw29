const initialState = {
	contacts: [],
	filter: '',
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'plus':
			return {
				...state,
				contacts: [...state.contacts, action.payload],
			};

		case 'delete':
			return {
				...state,
				contacts: state.contacts.filter(
					contact => contact.id !== action.payload
				),
			};

		case 'setFilter':
			return {
				...state,
				filter: action.payload,
			};

		default:
			return state;
	}
};
