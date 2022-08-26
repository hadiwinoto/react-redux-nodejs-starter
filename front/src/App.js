/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import { Breadcrumb } from 'semantic-ui-react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import DatabaseHotel from "./components/pages/DatabasePage";
import DatabaseKomersial from "./components/pages/DatabaseKomersial";

import { logout } from "./slices/auth";

import EventBus from "./common/EventBus";

const App = () => {
  const myStyle = {
    borderTop: "1px outset",
  };
  const styleNav = {
    padding: "0px",
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
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand href="/" style={styleNav}>
              <img alt="Logo" className="text-left" src="https://system.rhr.co.id/images/risbaru.png" width="165" />
            </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/home">Home</Nav.Link>
                     
                      {showModeratorBoard && (
                        <li className="nav-item">
                          <Nav.Link href="/mod">Moderator Board</Nav.Link>
                        </li>
                      )}
                      {showAdminBoard && (
                        <li className="nav-item">
                          {/* <Nav.Link href="/admin">Admin Board</Nav.Link> */}
                          <Nav.Link href="/database">Database</Nav.Link>
                        </li>
                      )}
                      {currentUser && (
                        <li className="nav-item">
                          <Nav.Link href="/profile">Profile</Nav.Link>
                        </li>
                      )}
                    </Nav>
                    
                  </Navbar.Collapse>
                  {currentUser ? (
                <ul className="navbar-nav ms-auto">
                  <NavDropdown className="mt-2">
                    <NavDropdown.Item>
                      <span style={upperCase}>{currentUser.username}</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/login" onClick={logOut}>
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                  <img
                    className="mt-1"
                    width="30px" height="30"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6MEn1wZkViQK-XUfpCl4ogHaHv%26pid%3DApi&f=1">
                  </img>
                </ul>
              ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    {/* <Link to={"/register"} className="nav-link">
                      Sign Up
                    </Link> */}
                  </li>
                </div>
              )}
          </Container>
        </Navbar>

        <Navbar  bg="white" style={myStyle} expand="lg">
          <Container>
              <Breadcrumb size="small">
                  <Breadcrumb.Section link>Home</Breadcrumb.Section>
                  <Breadcrumb.Divider icon='right chevron' />
                  <Breadcrumb.Section active link>Database</Breadcrumb.Section>
                  {/* <Breadcrumb.Divider icon='right chevron' />
                  <Breadcrumb.Section active></Breadcrumb.Section> */}
              </Breadcrumb>
          </Container>
        </Navbar>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />

            
            <Route exact path="/database/hotel" component={DatabaseHotel} />
            <Route exact path="/database" component={DatabaseKomersial}/>


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
