import React from "react";
import ModalContainer from "../../../modalContainer";
import {deleteUser} from "../../../../store/action-creators/users";
import {useDispatch} from "react-redux";

const DeleteUser = ({
                             isOpenModal,
                             toggleOpenModal,
                             currentUserId,
                         }) => {

    const dispatch = useDispatch()

    const onSubmit = async () => {
        dispatch(deleteUser(currentUserId))
    };

    return (
        <ModalContainer
            title="Удалить пользователя"
            isOpenModal={isOpenModal}
            toggleOpenModal={toggleOpenModal}
            onSubmit={onSubmit}
        >
            <div>Вы действительно хотите удалить?</div>
        </ModalContainer>
    );
};

export default DeleteUser;
