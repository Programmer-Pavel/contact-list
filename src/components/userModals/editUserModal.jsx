import React from "react";
import ModalContainer from "../modalContainer";
import { Form, Input, Select, Button, Typography } from "antd";
import axios from "axios";
import InputMask from "react-input-mask";

const { Option } = Select;

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

const EditUserModal = ({
  isOpenModal,
  toggleOpenModal,
  currentUser,
  getUsers,
}) => {
  const [form] = Form.useForm();

  const onSubmit = async (values) => {
    const arr = [];

    let valueEmail = values.email;
    let valuePhone = values.phone;

    const objEmail = {
      type: "email",
      value: valueEmail,
    };

    const objPhone = {
      type: "phone",
      value: valuePhone,
    };

    for (let key in values) {
      if (key === "email") {
        arr.push(objEmail);
      }
      if (key === "phone") {
        arr.push(objPhone);
      }
    }

    const userdata = {
      last_name: values.last_name,
      first_name: values.first_name,
      middle_name: values.middle_name,
      gender: values.gender,
      birth_date: values.birth_date,
      contacts: arr,
    };

    await axios
      .put(`${process.env.REACT_APP_API_URL}/users/${currentUser.id}`, userdata)
      .then(() => {
        toggleOpenModal(false);
        getUsers();
      })
      .catch((error) => {
        console.log("user edit error!", error);
      });
  };

  const getEmail = currentUser.contacts.find((item) => item.type === "email");
  const getPhone = currentUser.contacts.find((item) => item.type === "phone");

  return (
    <ModalContainer
      title="Редактировать"
      isOpenModal={isOpenModal}
      toggleOpenModal={toggleOpenModal}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onSubmit}
        initialValues={{
          last_name: `${currentUser.last_name}`,
          first_name: `${currentUser.first_name}`,
          middle_name: `${currentUser.middle_name}`,
          gender: `${currentUser.gender}`,
          birth_date: `${currentUser.birth_date}`,
          email: `${getEmail ? getEmail.value : null}`,
          phone: `${getPhone ? getPhone.value : null}`,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="last_name"
          label="Фамилия"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите фамилию!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="first_name"
          label="Имя"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите имя!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="middle_name"
          label="Отчество"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите отчество!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Пол"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите ваш пол!",
            },
          ]}
        >
          <Select placeholder="выберите пол">
            <Option value="male">Мужчина</Option>
            <Option value="female">Женщина</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="birth_date"
          label="Дата рождения"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите дату рождения!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <p style={{ display: "flex", justifyContent: "center" }}>Контакты:</p>

        {currentUser.contacts.length ? (
          currentUser.contacts.map((element, index) => {
            return (
              <div key={index}>
                {element.type === "phone" ? (
                  <Form.Item
                    name="phone"
                    label="Телефон"
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
                ) : element.type === "email" ? (
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
                ) : null}
              </div>
            );
          })
        ) : (
          <Typography.Text
            className="ant-form-text"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
            type="secondary"
          >
            (<span>No contacts yet.</span> )
          </Typography.Text>
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

export default EditUserModal;
