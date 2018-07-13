import axios from 'axios';
import { FETCH_PETS } from './types';

export const fetchPets = () => async dispatch => {
	const res = await axios.get('/api/pets');

	dispatch({ type: FETCH_PETS, payload: res.data });
};
