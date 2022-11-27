import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Nav.css";

function Nav() {
  return (
    <div>
      <div className="nav">
        <ul className="nav__ul">
          <li className="nav__li">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="nav__li">
          <Link to="/store">Store</Link>
        </li> */}
          <li className="nav__li">
            <Link to="/addsynagoge">Add Synagoge</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
