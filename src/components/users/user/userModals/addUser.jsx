import React from "react";
import ModalContainer from "../../../modalContainer";
import { Form, Input, Select, Button } from "antd";
import {useDispatch} from "react-redux";
import {addUser} from "../../../../store/action-creators/users";

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

const AddUser = ({ isOpenModal, toggleOpenModal}) => {
  const [form] = Form.useForm();

  const dispatch = useDispatch()

  const onSubmit = async (values) => {
    const userdata = {
      last_name: values.last_name,
      first_name: values.first_name,
      middle_name: values.middle_name,
      gender: values.gender,
      birth_date: values.birth_date,
      contacts: [],
    };

    dispatch(addUser(userdata)).then(() => toggleOpenModal(false))

  };

  return (
    <ModalContainer
      title="Добавить пользователя"
      isOpenModal={isOpenModal}
      toggleOpenModal={toggleOpenModal}
      onSubmit={onSubmit}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onSubmit}
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

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "10px" }}
          >
            Добавить
          </Button>
          <Button onClick={() => toggleOpenModal(false)}>Отмена</Button>
        </div>
      </Form>
    </ModalContainer>
  );
};

export default AddUser;
