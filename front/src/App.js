/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import NavDropdown from 'react-bootstrap/NavDropdown';



import { logout } from "./slices/auth";

import EventBus from "./common/EventBus";

const App = () => {
  const myStyle = {
      borderTop: "1px outset",
  };
  const styleNav = {
      padding: "5px",
  };
  const upperCase = {
      textTransform: "capitalize"
  }

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm ml-0">
            <a href="/"style={styleNav}>
                <img alt="Logo" className="text-left" src="https://system.rhr.co.id/images/risbaru.png" width="165"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul>
            <li className="nav-item ml-5">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
            </ul>
            {currentUser ? (
            // <div className="navbar-nav ml-auto">
            //   <li className="nav-item">
            //     <Link to={"/profile"} className="nav-link" style={upperCase}>
            //       {currentUser.username}
            //     </Link>
            //   </li>
            //   <li className="nav-item">
            //     <a href="/login" className="nav-link" onClick={logOut}>
            //       LogOut
            //     </a>
            //   </li>
            // </div>

          //   <div>
          //     <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
          //       <Menu.Item index="1">Processing Center</Menu.Item>
          //       <Menu.SubMenu index="2" title="Workspace">
          //         <Menu.Item index="2-1">Option 1</Menu.Item>
          //         <Menu.Item index="2-2">Option 2</Menu.Item>
          //         <Menu.Item index="2-3">Option 3</Menu.Item>
          //       </Menu.SubMenu>
          //       <Menu.Item index="3">Orders</Menu.Item>
          //     </Menu>
          //     <div className="line"></div>
          //     <Menu defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
          //       <Menu.Item index="1">Processing Center</Menu.Item>
          //       <Menu.SubMenu index="2" title="Workspace">
          //         <Menu.Item index="2-1">Option 1</Menu.Item>
          //         <Menu.Item index="2-2">Option 2</Menu.Item>
          //         <Menu.Item index="2-3">Option 3</Menu.Item>
          //       </Menu.SubMenu>
          //       <Menu.Item index="3">Orders</Menu.Item>
          //     </Menu>
          // </div>

            <div className="container">
                <ul className="navbar-nav ms-auto">
                    <img
                        className="mt-1"
                        width="30px" height="30" 
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6MEn1wZkViQK-XUfpCl4ogHaHv%26pid%3DApi&f=1">
                    </img>
                    <NavDropdown>
                      <NavDropdown.Item>
                            <span style={upperCase}>{currentUser.username}</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={logOut}>
                  
                        Log Out
                      </NavDropdown.Item>
                    </NavDropdown>
                </ul>
              </div>

          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
          </div>
        </nav>
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm" style={myStyle}>
            <div className="container-fluid">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                  </ol>
                </nav>
            </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
