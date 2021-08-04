import {List, Button} from "antd";
import React, {useState} from "react";
import "antd/dist/antd.css";
import EditUser from "./user/userModals/editUser";
import DeleteUser from './user/userModals/deleteUser';
import AddUser from './user/userModals/addUser';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from '../../store/reducers/userReducer';
import {NavLink} from "react-router-dom";

const UserList = () => {
    const [isOpenEditModal, toggleEditModal] = useState(false);
    const [isOpenDeleteModal, toggleDeleteModal] = useState(false);
    const [isOpenAddModal, toggleAddModal] = useState(false);

    const dispatch = useDispatch()

    const {users, isFetching, currentUser} = useSelector(state => state.users)


    const onEditBtnClick = (user) => {
        toggleEditModal(true)
        dispatch(setCurrentUser(user))
    }

    const onDeleteBtnClick = (user) => {
        toggleDeleteModal(true)
        dispatch(setCurrentUser(user))
    }


    return (
        <>
            {isOpenEditModal && (
                <EditUser
                    isOpenModal={isOpenEditModal}
                    toggleOpenModal={toggleEditModal}
                    currentUser={currentUser}
                />
            )}
            {isOpenDeleteModal && (
                <DeleteUser
                    isOpenModal={isOpenDeleteModal}
                    toggleOpenModal={toggleDeleteModal}
                    currentUserId={currentUser.id}
                />
            )}
            {isOpenAddModal && (
                <AddUser
                    isOpenModal={isOpenAddModal}
                    toggleOpenModal={toggleAddModal}
                    currentUser={currentUser}
                />
            )}
            <List
                className="user-list"
                loading={isFetching}
                itemLayout="horizontal"
                dataSource={users}
                bordered
                footer={
                    <div>
                        <Button
                            onClick={() => toggleAddModal(true)}
                        >
                            Добавить пользователя
                        </Button>
                    </div>
                }
                pagination={{
                    pageSize: 3,
                }}
                renderItem={(user) => (
                    <List.Item
                        actions={[
                            <Button
                                key="list-loadmore-edit"
                                onClick={() => onEditBtnClick(user)}
                            >
                                редактировать
                            </Button>,
                            <Button
                                key="list-loadmore-delete"
                                onClick={() => onDeleteBtnClick(user)}
                                danger
                            >
                                удалить
                            </Button>,
                        ]}
                    >
                        <List.Item.Meta
                            title={<NavLink to={`/users/${user.id}`} onClick={() => dispatch(setCurrentUser(user))}>
                                {user.last_name} {user.first_name} {user.middle_name}
                            </NavLink>}
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

export default UserList;
