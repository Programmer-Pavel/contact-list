import React from "react";
import { Modal, Button } from "antd";

const ModalContainer = ({
  children,
  isOpenModal,
  toggleOpenModal,
  title,
  onSubmit,
}) => {
  const handleOk = () => {
    toggleOpenModal(false);
    onSubmit();
  };

  const handleCancel = () => {
    toggleOpenModal(false);
  };

  const footerBtns = () => {
    return (
      <div>
        <Button type="primary" onClick={handleOk}>
          Подтвердить
        </Button>
        <Button onClick={handleCancel}>Отмена</Button>
      </div>
    );
  };

  return (
    <>
      <Modal
        title={<div style={{ textAlign: "center" }}>{title}</div>}
        visible={isOpenModal}
        onCancel={handleCancel}
        footer={title === "Удалить пользователя" ? footerBtns() : null}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalContainer;
