import { Form, Button, Space } from "antd";
import {
  MinusCircleOutlined,
  CheckOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";

const ContactInput = ({
  children,
  btnName,
  inputName,
  getUsers,
  currentUser,
}) => {
  const [disableBtn, setDisableBtn] = useState(false);

  const onFinish = async (values) => {
    const inputValue =
      inputName === "email" ? { ...values.email } : { ...values.phone };

    const phoneData = {
      type: "phone",
      value: inputValue.phone,
    };

    const emailData = {
      type: "email",
      value: inputValue.email,
    };

    await axios
      .patch(`${process.env.REACT_APP_API_URL}/users/${currentUser.id}`, {
        contacts: [
          ...currentUser.contacts,
          inputName === "email" ? emailData : phoneData,
        ],
      })
      .then(() => {
        getUsers();
      })
      .catch((error) => {
        console.log("user delete error!", error);
      });
  };

  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name={inputName}>
        {(fields, { add, remove }) => {
          const onAddBtnClick = () => {
            add();
            setDisableBtn(true);
          };

          const onRemoveBtnClick = (name) => {
            remove(name);
            setDisableBtn(false);
          };

          return (
            <>
              {fields.map(({ key, name }) => (
                <Space key={key} style={{ display: "flex" }} align="baseline">
                  {children}
                  <MinusCircleOutlined onClick={() => onRemoveBtnClick(name)} />
                  <Button htmlType="submit" icon={<CheckOutlined />} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  style={{ width: "57%" }}
                  onClick={onAddBtnClick}
                  disabled={disableBtn}
                  block
                  icon={<PlusOutlined />}
                >
                  Добавить {btnName}
                </Button>
              </Form.Item>
            </>
          );
        }}
      </Form.List>
    </Form>
  );
};

export default ContactInput;
