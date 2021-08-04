import {Button} from "antd";
import React from "react";
import ModalContainer from "../../../../modalContainer";
import {useDispatch} from "react-redux";
import {deleteContact} from "../../../../../store/action-creators/contacts";
import UserType from "../contactType";

const ContactDelete = ({
                           isOpenModal,
                           toggleOpenModal,
                           currentUser,
                           contactType,
                       }) => {

    const dispatch = useDispatch()

    const onSubmit = async () => {

        const email = UserType.getContact('email', currentUser)
        const phone = UserType.getContact('phone', currentUser)

        const contacts = contactType === "email" ? phone : email;

        const getContact = () => (!contacts ? [] : [contacts]);

        dispatch(deleteContact(currentUser.id, {contacts: getContact()})).then(() => toggleOpenModal(false))

    };

    return (
        <ModalContainer
            title={`Удалить ${UserType.getModalTitle(contactType)}`}
            isOpenModal={isOpenModal}
            toggleOpenModal={toggleOpenModal}
        >
            <div style={{textAlign: "center"}}>
                Вы действительно хотите удалить?
            </div>
            <div className="footer-btn">
                <Button
                    type="primary"
                    style={{marginRight: "10px"}}
                    onClick={onSubmit}
                >
                    Подтвердить
                </Button>
                <Button onClick={() => toggleOpenModal(false)}>Отмена</Button>
            </div>
        </ModalContainer>
    );
};

export default ContactDelete;
