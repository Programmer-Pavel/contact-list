import React from "react";
import ModalContainer from "../../../../modalContainer";
import { Form, Button } from "antd";
import {editContact} from "../../../../../store/action-creators/contacts";
import {useDispatch} from "react-redux";
import UserType from "../contactType";

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

const ContactEdit = ({
  isOpenModal,
  toggleOpenModal,
  currentUser, contactType,
}) => {
  const [form] = Form.useForm();

  const getEmail = UserType.getContact('email', currentUser)
  const getPhone = UserType.getContact('phone', currentUser)

  const dispatch = useDispatch()

  const onSubmit = (values) => {

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

    dispatch(editContact(currentUser.id, userdata)).then(() => toggleOpenModal(false))

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
        {UserType.getInput(contactType)}

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

export default ContactEdit;
