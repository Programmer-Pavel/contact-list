import React from "react";
import { Form, Input } from "antd";
import ContactInput from "../../../../../contactInputContainer";

const AddEmailInput = ({ currentUser }) => {
  return (
    <ContactInput
      btnName="email"
      inputName="email"
      currentUser={currentUser}
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
