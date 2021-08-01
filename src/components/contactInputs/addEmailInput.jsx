import React from "react";
import { Form, Input } from "antd";
import ContactInput from "../contactInputContainer";

const AddEmailInput = ({ currentUser, getUsers }) => {
  return (
    <ContactInput
      btnName="email"
      inputName="email"
      currentUser={currentUser}
      getUsers={getUsers}
    >
      <Form.Item
        name="email"
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
        <Input placeholder="email" />
      </Form.Item>
    </ContactInput>
  );
};

export default AddEmailInput;
