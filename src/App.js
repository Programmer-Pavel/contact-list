import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import axios from "axios";
import UsersList from "./pages/usersList";

const App = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users`)
      .then((r) => {
        setUsers(r.data);
        setInitLoading(false);
      })
      .catch(() => {
        console.log("Error");
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <UsersList
        users={users}
        setUsers={setUsers}
        getUsers={getUsers}
        initLoading={initLoading}
      />
    </>
  );
};

export default App;
