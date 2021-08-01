import {List, Avatar, Button, Skeleton} from "antd";
import React, {useState} from "react";
import "antd/dist/antd.css";
import image from "../images/female.png";
import UserInfo from "../pages/userInfo";
import EditUserModal from "../components/userModals/editUserModal";
import DeleteUserModal from '../components/userModals/deleteUserModal';
import AddUserModal from '../components/userModals/addUserModal';

const UsersList = ({initLoading, users, setUsers, getUsers}) => {
    const [isOpenEditModal, toggleEditModal] = useState(false);
    const [isOpenDeleteModal, toggleDeleteModal] = useState(false);
    const [isOpenAddModal, toggleAddModal] = useState(false);
    const [currentUser, setCurrentUser] = useState();


    const onEditBtnClick = (user) => {
        toggleEditModal(true)
        setCurrentUser(user)
    }

    const onDeleteBtnClick = (user) => {
        toggleDeleteModal(true)
        setCurrentUser(user)
    }

    return (
        <>
            {isOpenEditModal && (
                <EditUserModal
                    isOpenModal={isOpenEditModal}
                    toggleOpenModal={toggleEditModal}
                    currentUser={currentUser}
                    getUsers={getUsers}
                />
            )}
            {isOpenDeleteModal && (
                <DeleteUserModal
                    isOpenModal={isOpenDeleteModal}
                    toggleOpenModal={toggleDeleteModal}
                    currentUserId={currentUser.id}
                    getUsers={getUsers}
                />
            )}
            {isOpenAddModal && (
                <AddUserModal
                    isOpenModal={isOpenAddModal}
                    toggleOpenModal={toggleAddModal}
                    currentUser={currentUser}
                    getUsers={getUsers}
                />
            )}
            <List
                className="user-list"
                loading={initLoading}
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
                        <Skeleton avatar title={false} loading={user.loading} active>
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        src={
                                            user.gender === "male"
                                                ? "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                                : image
                                        }
                                    />
                                }
                                title={
                                    <span>
                    {user.last_name} {user.first_name} {user.middle_name}
                  </span>
                                }
                                description={<UserInfo user={user} getUsers={getUsers} currentUser={currentUser}
                                                       setCurrentUser={setCurrentUser}/>}
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        </>
    );
};

export default UsersList;
