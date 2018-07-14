import { ADD_ERROR, REMOVE_ERROR } from '../actions/types/error.types';

const defaultState = {
    message: null,
    visible: false,
    status: null,
    sucess: false
}

export const GlobalErrorReducer = ( state = defaultState, { type, payload } ) => {
    switch( type ){
        case ADD_ERROR:
        return {
            ...state,
            message: payload.message,
            visible: true,
            status: payload.status,
            sucess: payload.success? payload.success: false
        };
        case REMOVE_ERROR:
        return {
            ...state,
            ...defaultState
        };
        default: 
        return {...state};
    }

}