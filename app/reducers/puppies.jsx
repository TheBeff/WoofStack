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
	console.log("this is the action", action)
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
		axios.get('/api/puppies')
			.then(result => result.data)
			.then(puppies => dispatch(setAllPuppies(puppies)));
};

export const updatePuppies = (changedPuppy) => {
	console.log("update puppies?")
	return dispatch => {
		// axios.put(`/api/puppies/${changedPuppy.id}`, {'puppy': {'id': changedPuppy.id, 'attendance': changedPuppy.attendance}})
		// 	 .then(response => {
		// 	 	const updatedPuppies = response.data
		// 	 	const presentPuppies = updatedPuppies.filter(puppy => {
		// 	 		if (puppy.attendance === 'present') return puppy;
		// 	 	})
		// 	 	dispatch(setAllPuppies(updatedPuppies))
		// 	 	dispatch(setPresentPuppies(presentPuppies))
		// 	 })
		// 	 .then(() => {
			
			var payload = {
				channel: '#woofstack',
				username: 'Woofstack',
				text: `${changedPuppy.name} is on campus! Please come to floor ${changedPuppy.floor} rub my ${changedPuppy.preferredPetting[0]}. Visit https://wpjjvhnzkz.localtunnel.me to see who else is on campus today!`
			}
			console.log("how about now?")
				 axios.post('https://hooks.slack.com/services/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', payload)
			 	};
}

export default reducer;


// curl -X POST --data-urlencode 'payload={"channel": "#woofstack", "username": "WoofStack", "text": "${dog.name} is on campus! Please come to floor ${dog.floor} rub my ${dog.preferredPetting[0]}. Visit https://couarsytrd.localtunnel.me to see who else is on campus today!", "icon_emoji": ":ohmydog:"}', https://hooks.slack.com/services/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 