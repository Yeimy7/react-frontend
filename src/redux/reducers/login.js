
import { UPDATE_PARAMS_EMAIL, UPDATE_PARAMS_PASSWORD } from '../constants/index'

const INIT_STATE_LOGIN = {
    email: '',
    password: '',
}

const login = (state = INIT_STATE_LOGIN, action) => {
    switch (action.type) {
        case 'LOGIN_USER_SUCCESS':
            return { ...state };
        case 'LOGIN_USER_ERROR':
            return { ...state };
        case UPDATE_PARAMS_EMAIL:
            return { ...state, email: action.payload };
        case UPDATE_PARAMS_PASSWORD:
            return { ...state, password: action.payload };
        default:
            return { ...state };
    }
}

export default login;