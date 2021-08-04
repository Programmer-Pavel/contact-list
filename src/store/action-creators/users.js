import {setIsFetching, setUsers} from "../reducers/userReducer";
import {usersAPI} from '../../api'


export const getUsers = () => {
    return async (dispatch) => {
        try {
            const response = await usersAPI.getUsers()
            dispatch(setUsers(response))
            dispatch(setIsFetching(false))
        } catch (error) {
           console.log('error', error)
        }
    }
}

export const deleteUser = (currentUserId) => {
    return async (dispatch) => {
        try {
            await usersAPI.deleteUser(currentUserId)
            dispatch(getUsers())
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const editUser = (currentUserId, userData) => {
    return async (dispatch) => {
        try {
            await usersAPI.editUser(currentUserId, userData)
            dispatch(getUsers())
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const addUser = (userData) => {
    return async (dispatch) => {
        try {
            await usersAPI.addUser(userData)
            dispatch(getUsers())
        } catch (error) {
            console.log('error', error)
        }
    }
}