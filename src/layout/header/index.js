import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/icons/logoClean.svg';
import './header.scss'


const Header = () => {
  return (
    <div className="container-fluid-home">
      <div className="container-menu">
        <div className="container-logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="box-menu">
          <ul>
            <NavLink activeClassName="selected" className="list-menu" to="/equipo">
              <li>
                Equipo
              </li>
            </NavLink>
            <NavLink activeClassName="selected" className="list-menu" to="/servicos/initial">
              <li>
                Servicios
              </li>
            </NavLink>
            <NavLink activeClassName="selected" className="list-menu" to="/contacto">
              <li>
                Contacto
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
