import React, {useState} from 'react';
import ContactDelete from "./contactModals/contactDelete";
import ContactEdit from "./contactModals/contactEdit";
import AddEmailInput from "./contactItems/contactActions/addEmailInput";
import AddPhoneInput from "./contactItems/contactActions/addPhoneInput";
import UserType from "./contactType";
import {useDispatch, useSelector} from "react-redux";
import {setContactType} from "../../../../store/reducers/userReducer";

const UserContacts = () => {

    const [isOpenDeleteModal, toggleDeleteModal] = useState(false);
    const [isOpenEditModal, toggleEditModal] = useState(false);

    const dispatch = useDispatch()

    const {contactType, currentUser} = useSelector(state => state.users)

    const onDeleteBtnClick = (type) => {
        toggleDeleteModal(true);
        dispatch(setContactType(type));
    };

    const onEditBtnClick = (type) => {
        toggleEditModal(true);
        dispatch(setContactType(type));
    };

    const email = UserType.getContact('email', currentUser)
    const phone = UserType.getContact('phone', currentUser)

    return (
        <>
            {isOpenDeleteModal && (
                <ContactDelete
                    contactType={contactType}
                    isOpenModal={isOpenDeleteModal}
                    toggleOpenModal={toggleDeleteModal}
                    currentUser={currentUser}
                />
            )}
            {isOpenEditModal && (
                <ContactEdit
                    contactType={contactType}
                    isOpenModal={isOpenEditModal}
                    toggleOpenModal={toggleEditModal}
                    currentUser={currentUser}
                />
            )}

            <span style={{display: "flex", flexDirection: "column"}}>
                Контакты:
                <span style={{display: "flex", flexDirection: "column"}}>
                  {currentUser.contacts.map((item, index) => {
                      return (
                          <div key={index}>
                              {UserType.getItem(item, onDeleteBtnClick, onEditBtnClick)}
                          </div>
                      );
                  })}
                </span>
                {currentUser.contacts.length > 0 ? (
                    !email ? (
                        <AddEmailInput currentUser={currentUser}/>
                    ) : !phone ? (
                        <AddPhoneInput currentUser={currentUser}/>
                    ) : null
                ) : (
                    <>
                        <AddEmailInput currentUser={currentUser}/>
                        <AddPhoneInput currentUser={currentUser}/>
                    </>
                )}
                </span>
        </>
    );
};

export default UserContacts;