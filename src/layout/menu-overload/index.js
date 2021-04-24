import React from 'react'
import { NavLink } from "react-router-dom";
import classNames from 'classnames'
import { ReactComponent as Close } from '../../assets/icons/close.svg'
import './menu-overload.scss'

const ManuOverload = ({onOpenMenu, isMenuOpen}) => {
  let container = classNames({
    'container-menu-overload': true,
    'isOpen': isMenuOpen,
  })
  return (
    <div className={container} onClick={onOpenMenu}>
      <div className="box-close-menu-overload">
        <Close />
      </div>
      <div className="box-menu-overload">
          <ul>
            <NavLink 
              activeClassName="selected" 
              className="list-menu-overload" 
              to="/"
              >
              <li >
                Home
              </li>
            </NavLink>
            <NavLink 
              activeClassName="selected" 
              className="list-menu-overload" 
              to="/equipo"
              >
              <li >
                Equipo
              </li>
            </NavLink>
            <NavLink 
              activeClassName="selected" 
              className="list-menu-overload" 
              to="/servicios">
              <li onClick={onOpenMenu}>
                Servicios
              </li >
            </NavLink>
            <NavLink 
              activeClassName="selected" 
              className="list-menu-overload" 
              to="/contacto">
              <li onClick={onOpenMenu}>
                Contacto
              </li>
            </NavLink>
          </ul>
        </div>
    </div>
  )
}

export default ManuOverload
