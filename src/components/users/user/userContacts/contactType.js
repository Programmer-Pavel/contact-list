import EmailInput from "./contactModals/contactFormInputs/emailInput";
import PhoneInput from "./contactModals/contactFormInputs/phoneInput";
import React from "react";
import AddEmailInput from "./contactItems/contactActions/addEmailInput";
import AddPhoneInput from "./contactItems/contactActions/addPhoneInput";
import PhoneBlock from "./contactItems/phoneBlock";
import EmailBlock from "./contactItems/emailBlock";


class UserType {
    constructor() {
        this.contactTypes = {
            email: {
                input: () => <EmailInput/>,
                addInput: () => <AddPhoneInput/>,
                item: (item, onDeleteBtnClick, onEditBtnClick) => <EmailBlock item={item} onDeleteBtnClick={onDeleteBtnClick}
                                                                              onEditBtnClick={onEditBtnClick}/>,
                isContact: (currentUser) => currentUser.contacts.find((item) => item.type === "email"),
                modalTitle: 'email'
            },
            phone: {
                input: () => <PhoneInput/>,
                addInput: () => <AddEmailInput/>,
                item: (item, onDeleteBtnClick, onEditBtnClick) => <PhoneBlock item={item} onDeleteBtnClick={onDeleteBtnClick}
                                                                              onEditBtnClick={onEditBtnClick}/>,
                isContact: (currentUser) => currentUser.contacts.find((item) => item.type === "phone"),
                modalTitle: 'phone'
            }
        };
        this.genderTypes = {
            male: {
                gender: 'мужчина',
            },
            female: {
                gender: 'женщина',
            }
        };
    }

    getInput(type) {
        return this.contactTypes[type].input()
    }

    getItem(item, onDeleteBtnClick, onEditBtnClick) {
        return this.contactTypes[item.type].item(item, onDeleteBtnClick, onEditBtnClick)
    }

    getContact(type, currentUser) {
        return this.contactTypes[type].isContact(currentUser)
    }

    getModalTitle(type) {
        return this.contactTypes[type].modalTitle
    }

    getGender(type) {
        debugger
        return this.genderTypes[type].gender
    }

}

export default new UserType();