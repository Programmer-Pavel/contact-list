import React from "react";
import ModalContainer from "../modalContainer";
import { Form, Input, Button } from "antd";
import axios from "axios";
import InputMask from "react-input-mask";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const ContactEditModal = ({
  isOpenModal,
  toggleOpenModal,
  currentUser,
  getUsers,
  contactType,
}) => {
  const [form] = Form.useForm();

  const getEmail = currentUser.contacts.find((item) => item.type === "email");
  const getPhone = currentUser.contacts.find((item) => item.type === "phone");

  const onSubmit = (values) => {
    console.log("values", values);

    const objEmail = {
      type: "email",
      value: values.email,
    };

    const objPhone = {
      type: "phone",
      value: values.phone,
    };

    const emailEdit = !getPhone
      ? [objEmail]
      : [objEmail, { type: "phone", value: getPhone.value }];

    const phoneEdit = !getEmail
      ? [objPhone]
      : [{ type: "email", value: getEmail.value }, objPhone];

    const userdata = {
      contacts: contactType === "email" ? emailEdit : phoneEdit,
    };

    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/users/${currentUser.id}`,
        userdata
      )
      .then(() => {
        toggleOpenModal(false);
        getUsers();
      })
      .catch((error) => {
        console.log("user edit error!", error);
      });
  };

  return (
    <ModalContainer
      title="Редактировать контакт"
      isOpenModal={isOpenModal}
      toggleOpenModal={toggleOpenModal}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onSubmit}
        initialValues={{
          email: `${getEmail ? getEmail.value : null}`,
          phone: `${getPhone ? getPhone.value : null}`,
        }}
        scrollToFirstError
      >
        {contactType === "email" ? (
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "Невалидный email!",
              },
              {
                required: true,
                message: "Пожалуйста, введите email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        ) : (
          <Form.Item
            name="phone"
            label="телефон"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите ваш телефон!",
              },
            ]}
          >
            <InputMask
              mask="+7\(999) 999-9999"
              maskChar=" "
              placeholder="телефон"
            />
          </Form.Item>
        )}

        <div className="footer-btn">
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "10px" }}
          >
            Подтвердить
          </Button>
          <Button onClick={() => toggleOpenModal(false)}>Отмена</Button>
        </div>
      </Form>
    </ModalContainer>
  );
};

export default ContactEditModal;
