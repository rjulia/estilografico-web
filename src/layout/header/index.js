import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/icons/logoClean.svg';
import MenuServicios from './menu-servicios'
import './header.scss'


const Header = () => {
  return (
    <div className="container-fluid-header-home">
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
            <div className="list-menu">
              <li>
                Servicios
              </li>
              <div className="list-submenus">
                <MenuServicios/>
              </div>
            </div>
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
