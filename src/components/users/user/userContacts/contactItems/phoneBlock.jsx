import React from 'react';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const PhoneBlock = ({item, onEditBtnClick, onDeleteBtnClick}) => {
    return (
        <>
            <span>Телефон: {item.value}</span>
            <EditOutlined
                className="btn-cursor"
                onClick={() => onEditBtnClick(item.type)}
            />
            <DeleteOutlined
                className="btn-cursor"
                onClick={() => onDeleteBtnClick(item.type)}
            />
        </>
    );
};

export default PhoneBlock;