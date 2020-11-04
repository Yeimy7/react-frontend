
import {
    UPDATE_PARAMS_EMAIL,
    UPDATE_PARAMS_FIRSTNAME,
    UPDATE_PARAMS_LASTNAME,
    UPDATE_PARAMS_AGE
} from '../constants/index'


const INIT_STATE_REGISTER = {
    email: '',
    firstName: '',
    lastName: '',
    age: '',
}

const register = (state = INIT_STATE_REGISTER, action) => {
    switch (action.type) {
        case 'REGISTER_USER_SUCCESS':
            return { ...state };
        case 'REGISTER_USER_ERROR':
            return { ...state };
        case UPDATE_PARAMS_EMAIL:
            return { ...state, email: action.payload };
        case UPDATE_PARAMS_FIRSTNAME:
            return { ...state, firstName: action.payload };
        case UPDATE_PARAMS_LASTNAME:
            return { ...state, lastName: action.payload };
        case UPDATE_PARAMS_AGE:
            return { ...state, age: action.payload };
        default:
            return { ...state };
    }
}

export default register;