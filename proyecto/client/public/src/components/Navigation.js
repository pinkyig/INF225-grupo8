import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <ul className="nav nav-fill">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">
            Citas de hoy
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/agenda">
            Agenda una hora
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/perfil">
            Perfil
          </Link>
        </li>
      </ul>
    );
  }
}
