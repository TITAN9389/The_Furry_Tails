import { ADD_ERROR, REMOVE_ERROR } from './types/error.types'
const errorShowTime = 3000;

export const handleHttpError = (wrapedActionCreator) => {
    return (dispatch) => {
        return wrapedActionCreator(dispatch).catch((error) => {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
            //   console.log(error.response.data);
            //   console.log(error.response.status);
            //   console.log(error.response.headers);
            const payload = {
                message: error.response.data,
                status: error.response.status,
                success: false
            };
            dispatch(addGlobalError(payload));
            setTimeout(() => dispatch(removeGlobalError()) , errorShowTime);
            } else if (error.request) {
                const payload = {
                    message: 'no internet connection',
                    status: null,
                    success: false
                };
                dispatch(addGlobalError(payload));
                setTimeout(() =>  dispatch(removeGlobalError()), errorShowTime);
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
            //   console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
            //   console.log('Error', error.message);
            const payload = {
                message: 'something went wrong',
                status: null,
                success: false
            };
            dispatch(addGlobalError(payload));
            setTimeout(() => dispatch(removeGlobalError()) , errorShowTime);
            }
            // console.log(error.config);
          }
        );
    }
};

export const addGlobalError = ({message = '', status = null, success}) => {
    return {type:ADD_ERROR, payload: {message, status, success}}
}
export const removeGlobalError = () => {
    return {type: REMOVE_ERROR};
}