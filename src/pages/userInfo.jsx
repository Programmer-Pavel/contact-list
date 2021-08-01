import React, { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import AddEmailInput from "../components/contactInputs/addEmailInput";
import AddPhoneInput from "../components/contactInputs/addPhoneInput";
import ContactDeleteModal from "../components/contactModals/contactDeleteModal";
import ContactEditModal from "../components/contactModals/contactEditModal";

const UserInfo = ({ user, getUsers }) => {
  const [isOpenDeleteModal, toggleDeleteModal] = useState(false);
  const [isOpenEditModal, toggleEditModal] = useState(false);
  const [contactType, setContactType] = useState();

  const onDeleteBtnClick = (type) => {
    toggleDeleteModal(true);
    setContactType(type);
  };

  const onEditBtnClick = (type) => {
    toggleEditModal(true);
    setContactType(type);
  };

  const email = user.contacts.find((item) => item.type === "email");
  const phone = user.contacts.find((item) => item.type === "phone");

  return (
    <>
      {isOpenDeleteModal && (
        <ContactDeleteModal
          contactType={contactType}
          isOpenModal={isOpenDeleteModal}
          toggleOpenModal={toggleDeleteModal}
          currentUser={user}
          getUsers={getUsers}
        />
      )}
      {isOpenEditModal && (
        <ContactEditModal
          contactType={contactType}
          isOpenModal={isOpenEditModal}
          toggleOpenModal={toggleEditModal}
          currentUser={user}
          getUsers={getUsers}
        />
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>Пол: {user.gender === "male" ? "мужчина" : "женщина"}</span>
        <span>Дата рождения: {user.birth_date}</span>
        <span style={{ display: "flex", flexDirection: "column" }}>
          Контакты:
          <span style={{ display: "flex", flexDirection: "column" }}>
            {user.contacts.map((item, index) => {
              return (
                <div key={index}>
                  {item.type === "phone" ? (
                    <>
                      <span>Телефон: {item.value}</span>
                      <EditOutlined
                        className="btn-cursor"
                        onClick={() => onEditBtnClick(item.type)}
                      />
                      <DeleteOutlined
                        className="btn-cursor"
                        onClick={() => onDeleteBtnClick(item.type)}
                      />
                    </>
                  ) : (
                    <>
                      <span>E-mail: {item.value}</span>
                      <EditOutlined
                        className="btn-cursor"
                        onClick={() => onEditBtnClick(item.type)}
                      />
                      <DeleteOutlined
                        className="btn-cursor"
                        onClick={() => onDeleteBtnClick(item.type)}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </span>
          {user.contacts.length > 0 ? (
            !email ? (
              <AddEmailInput currentUser={user} getUsers={getUsers} />
            ) : !phone ? (
              <AddPhoneInput currentUser={user} getUsers={getUsers} />
            ) : null
          ) : (
            <>
              <AddEmailInput currentUser={user} getUsers={getUsers} />
              <AddPhoneInput currentUser={user} getUsers={getUsers} />
            </>
          )}
        </span>
      </div>
    </>
  );
};

export default UserInfo;
