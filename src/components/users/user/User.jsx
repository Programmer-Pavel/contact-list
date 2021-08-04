import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Button} from "antd";
import UserInfo from "./userInfo/userInfo";
import UserContacts from "./userContacts/UserContacts";

const User = () => {

    const {currentUser} = useSelector(state => state.users)

    const history = useHistory();

    return (
        <div>
            <div className='user-info'>
                <Button onClick={() => history.goBack()}>back</Button>
                <UserInfo currentUser={currentUser}/>
                <UserContacts />
            </div>
        </div>
    );
};

export default User;