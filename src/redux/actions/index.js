import { 
    UPDATE_PARAMS_EMAIL, 
    UPDATE_PARAMS_PASSWORD,
    UPDATE_PARAMS_FIRSTNAME,
    UPDATE_PARAMS_LASTNAME,
    UPDATE_PARAMS_AGE} from '../constants/index'

export const actionUpdateEmail = (payload) => ({
    type: UPDATE_PARAMS_EMAIL,
    payload,
})

export const actionUpdatePass = (payload) => ({
    type: UPDATE_PARAMS_PASSWORD,
    payload,
})
export const actionUpdateFirstName = (payload) => ({
    type: UPDATE_PARAMS_FIRSTNAME,
    payload,
})
export const actionUpdateLastName = (payload) => ({
    type: UPDATE_PARAMS_LASTNAME,
    payload,
})
export const actionUpdateAge = (payload) => ({
    type: UPDATE_PARAMS_AGE,
    payload,
})