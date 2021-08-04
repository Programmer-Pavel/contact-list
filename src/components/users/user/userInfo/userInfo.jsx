import React from "react";
import UserType from '../../user/userContacts/contactType'

const UserInfo = ({currentUser}) => {

    return (
        <>
            <span>{currentUser.last_name} {currentUser.first_name} {currentUser.middle_name}</span>
            <span>Пол: {UserType.getGender(currentUser.gender)}</span>
            <span>Дата рождения: {currentUser.birth_date}</span>
        </>
    );
};

export default UserInfo;
