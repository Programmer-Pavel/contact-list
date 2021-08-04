const SET_USERS= 'SET_USERS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const SET_CONTACT_TYPE = 'SET_CONTACT_TYPE'


const defaultState = {
    users: [],
    isFetching: true,
    currentUser: null,
    contactType: null
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case SET_CONTACT_TYPE:
            return {
                ...state,
                contactType: action.payload
            }
        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, payload: users})
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool})
export const setCurrentUser = (currentUser) => ({type: SET_CURRENT_USER, payload: currentUser})
export const setContactType = (type) => ({type: SET_CURRENT_USER, payload: type})