import axios from 'axios';
import { FETCH_PETS } from './types';

export const fetchPets = () => ( dispatch => {
	axios.get('http://localhost:6060/api/pets').then(res => {
		dispatch({ type: FETCH_PETS, payload: res.data });
	});

});
