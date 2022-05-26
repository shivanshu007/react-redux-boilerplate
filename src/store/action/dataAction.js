import { GET_DATA, DATA_ERROR } from '../types'


export const updateRedux = (data) => async dispatch => {
    try {
        dispatch({
            type: GET_DATA,
            payload: data
        })
    }
    catch (e) {
        dispatch({
            type: DATA_ERROR,
            payload: console.log(e),
        })
    }
}