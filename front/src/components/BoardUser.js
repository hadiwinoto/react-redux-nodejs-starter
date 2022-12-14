import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { Link } from "react-router-dom";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <div className="row">
          <div className="col-md-3">
              <div className="card">
                <div class="card-header px-3"><b>Database</b></div>
                <ul class="list-group list-group-light list-group-small">
                  <Link class="list-group-item px-3 border-0 active" aria-current="true">
                     Komersial
                  </Link>
                  <li class="list-group-item px-3">Industri</li>
                  <li class="list-group-item px-3">Agri</li>
                </ul>
              </div>
          </div>
          <div className="col-md-9">
              <div className="card">
                <div class="card-header px-3"><b>List Database Komersial</b></div>
                <ul class="list-group list-group-light list-group-small">
                  <li class="list-group-item px-3">Apartment</li>
                  <li class="list-group-item px-3">Resort</li>
                  <li class="list-group-item px-3">Hotel</li>
                  <li class="list-group-item px-3">{content}</li>
                </ul>
              </div>
          </div>
      </div>
    </div>
  );
};

export default BoardUser;
