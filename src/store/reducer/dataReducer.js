import { GET_DATA, DATA_ERROR } from '../types'

const initialState = {
    data: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload
            }
        case DATA_ERROR:
            return {
                ...state,
                data: action.payload
            }
        default: return state
    }

}