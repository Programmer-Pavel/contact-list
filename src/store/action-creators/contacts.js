import {usersAPI} from "../../api";
import {getUsers} from "./users";

export const addContact = (userId, userData) => {
    return async (dispatch) => {
        try {
            await usersAPI.addContact(userId, userData)
            dispatch(getUsers())
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const deleteContact = (userId, userData) => {
    return async (dispatch) => {
        try {
            await usersAPI.deleteContact(userId, userData)
            dispatch(getUsers())
        } catch (error) {
            console.log('error', error)
        }
    }
}


export const editContact = (userId, userData) => {
    return async (dispatch) => {
        try {
            await usersAPI.editContact(userId, userData)
            dispatch(getUsers())
        } catch (error) {
            console.log('error', error)
        }
    }
}