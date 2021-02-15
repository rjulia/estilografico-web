import React from 'react'
import {  Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/icons/logoClean.svg';
import './footer.scss'

const Footer = ({location}) => {
  console.log(location)
  return (
    <div className="container-fluid-home">
      <div className="container-footer">
        <div className="container-contact-footer">
          <div className="message-contact-footer">
            <p>¿Tienes un proyecto en mente?</p>
          </div>
          <Link to="/contacto" className="button-contanct-footer">
            <div><p>CONTACTA CON NOSOTROS</p></div>
          </Link>
        </div>
        <div className="box-footer">
          <div className="box-logo-footer">
            <div>
              <Logo/>
            </div>
            <p className="box-logo-footer-copyright">Copyright<span>©</span>ESTILOGRÁFICO</p>
          </div>
          <div className="box-info-footer">
            <div>
              <h3>CONTACTO:</h3>
              <p>Bidebarrieta, 27 B</p>
              <p>20600 Eibar. Gipuzkoa.</p>
              <span>Tel. 943 82 13 00</span>
            </div>
            <div>
              <h3>SÍGUENOS:</h3>
              <a href="https://www.w3schools.com">Linkedin</a>
            </div>
            <div>
              <h3>INFORMACION:</h3>
              <Link to="/pages" >
                <p>Política de cookies</p>
              </Link>
              <Link to="/pages">
                <p>Aviso legal</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
