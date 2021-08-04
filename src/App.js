import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Main from "./components/main/Main";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import User from "./components/users/user/User";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/users/:id' component={User}/>
                    <Redirect to='/'/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
