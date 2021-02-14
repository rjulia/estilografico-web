import _ from 'lodash'
import React from 'react'
import { Link } from "react-router-dom"
import { useServices } from '../../hooks'
import './services.scss'

const SubmenuServices = () => {
  const { services } = useServices();
  const servicesFiltered = _.filter(services, service => service.slug !== "equipo") 
  return (
    <div className="container-menu-services">
      <div className="box-submenu">
        <ul className="list-submenu">
          {
            _.map(servicesFiltered, (service) => (

              <li  key={service.orden}>
                <Link 
                  className="item-submenu"
                  style={{textDecoration: 'none'}} 
                  to={{
                    pathname: `/servicios/${service.slug}`,
                    state: {
                      id: service.sys.id
                    }
                  }} >
                  <p className="item-number-submenu">#0{service.orden}</p>
                  <p className="item-title-submenu">{service.nombre}</p>
                  <p className="item-description-submenu">{service.subtituloEnlaces}</p>
                    
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      
    </div>
  )
}

export default SubmenuServices
