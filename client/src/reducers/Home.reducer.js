import { HOME__SET_PETS } from '../actions/types/pets.types';

const defaultState = {
pets: []
}

export const HomeReducer = function(state = defaultState , action) {
	switch (action.type) {
		case HOME__SET_PETS:
			return {
				...state,
				pets: [...action.payload]
			};
		default:
			return state;
	}
}
