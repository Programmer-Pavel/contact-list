import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getUsers} from "../../store/action-creators/users";
import UsersList from "../users/userList";

const Main = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    })

    return (
        <div>
            <UsersList />
        </div>
    );
};

export default Main;