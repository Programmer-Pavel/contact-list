import axios from "axios";
import React from "react";
import ModalContainer from "../modalContainer";

const DeleteUserModal = ({
  isOpenModal,
  toggleOpenModal,
  currentUserId,
  getUsers,
}) => {
  const onSubmit = async () => {
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/users/${currentUserId}`)
      .then(() => {
        getUsers();
      })
      .catch((error) => {
        console.log("user delete error!", error);
      });
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

export default DeleteUserModal;
