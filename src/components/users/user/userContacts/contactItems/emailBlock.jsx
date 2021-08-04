import React from 'react';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const EmailBlock = ({item, onEditBtnClick, onDeleteBtnClick}) => {
    return (
        <>
            <span>E-mail: {item.value}</span>
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

export default EmailBlock;