import { Button } from "antd";
import axios from "axios";
import React from "react";
import ModalContainer from "../modalContainer";

const ContactDeleteModal = ({
  isOpenModal,
  toggleOpenModal,
  currentUser,
  contactType,
  getUsers,
}) => {
  const onSubmit = async () => {
    let email = currentUser.contacts.find((item) => item.type === "email");
    let phone = currentUser.contacts.find((item) => item.type === "phone");

    const contacts = contactType === "email" ? phone : email;

    const getContact = () => (!contacts ? [] : [contacts]);

    await axios
      .patch(`${process.env.REACT_APP_API_URL}/users/${currentUser.id}`, {
        contacts: getContact(),
      })
      .then(() => {
        getUsers();
        toggleOpenModal(false);
      })
      .catch((error) => {
        console.log("user delete error!", error);
      });
  };

  return (
    <ModalContainer
      title={`Удалить ${contactType === "email" ? "email" : "телефон"}`}
      isOpenModal={isOpenModal}
      toggleOpenModal={toggleOpenModal}
    >
      <div style={{ textAlign: "center" }}>
        Вы действительно хотите удалить?
      </div>
      <div className="footer-btn">
        <Button
          type="primary"
          style={{ marginRight: "10px" }}
          onClick={onSubmit}
        >
          Подтвердить
        </Button>
        <Button onClick={() => toggleOpenModal(false)}>Отмена</Button>
      </div>
    </ModalContainer>
  );
};

export default ContactDeleteModal;
