import { FETCH_PETS } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_PETS:
			return [...state, action.payload];
		default:
			return state;
	}
}
