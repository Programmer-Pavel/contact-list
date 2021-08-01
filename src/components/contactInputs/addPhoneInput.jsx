import React from "react";
import { Form } from "antd";
import ContactInput from "../contactInputContainer";
import InputMask from "react-input-mask";

const AddPhoneInput = ({ currentUser, getUsers }) => {
  return (
    <ContactInput
      btnName="телефон"
      getUsers={getUsers}
      currentUser={currentUser}
      inputName="phone"
    >
      <Form.Item
        name="phone"
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
    </ContactInput>
  );
};

export default AddPhoneInput;
