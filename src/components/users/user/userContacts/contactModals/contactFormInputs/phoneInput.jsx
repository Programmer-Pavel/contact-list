import React from 'react';
import InputMask from "react-input-mask";
import {Form} from "antd";

const PhoneInput = () => {
    return (
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
    );
};

export default PhoneInput;