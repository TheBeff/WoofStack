import axios from 'axios';

const initialState = {
	puppies: [],
	presentPuppies: []
};

const GET_ALL_PUPPIES = 'GET_ALL_PUPPIES';
const GET_PRESENT_PUPPIES = 'GET_PRESENT_PUPPIES';
const ADD_PUPPY = 'ADD_PUPPY';
const DELETE_PUPPY = 'DELETE_PUPPY';
const UPDATE_PUPPY = 'UPDATE_PUPPY';

const reducer = (state = initialState, action) => {

	const newState = Object.assign({}, state);

	switch (action.type) {

		case GET_ALL_PUPPIES:
			newState.puppies = action.puppies;
			break;

		case GET_PRESENT_PUPPIES:
			newState.presentPuppies = action.presentPuppies;
			break;

		case ADD_PUPPY:
			newState.puppies = [...state.puppies, action.puppy];
			break;

		case DELETE_PUPPY:
			// newState.puppies = state.puppies.filter();
			break;

		case UPDATE_PUPPY:
			break;

		default:
			return state;
	}

	return newState;
};

export const setAllPuppies = (puppies) => ({
	type: GET_ALL_PUPPIES,
	puppies
});

export const setPresentPuppies = (presentPuppies) => ({
	type: GET_PRESENT_PUPPIES,
	presentPuppies
});

export const getAllPuppies = (puppies) => {
	return dispatch =>
		axios.get('/api/dogs')
			.then(result => result.data)
			.then(puppies => dispatch(setAllPuppies(puppies)));
};

export const getPresentPuppies = () => {
	return dispatch => 
		axios.get('/api/dogs')
			.then(result => result.data)
			.then(puppies => {
				const presentPuppies = puppies.filter(puppy => {
					if (puppy.attendance === 'present') return puppy;
				})
				dispatch(setPresentPuppies(presentPuppies))
			})
}

export const updatePuppies = (changedPuppy) => {
	return dispatch => 
		axios.put('/api/dogs', {'dog': {'id': changedPuppy.id, 'attendance': changedPuppy.attendance}})
			 .then(response => {
			 	const updatedPuppies = response.data
			 	const presentPuppies = updatedPuppies.filter(puppy => {
			 		if (puppy.attendance === 'present') return puppy;
			 	})
			 	dispatch(setAllPuppies(updatedPuppies))
			 	dispatch(setPresentPuppies(presentPuppies))
			 })
}


export default reducer;
