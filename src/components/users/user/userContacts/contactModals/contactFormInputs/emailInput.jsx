import React from 'react';
import {Form, Input} from "antd";

const EmailInput = () => {
    return (
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
    );
};

export default EmailInput;