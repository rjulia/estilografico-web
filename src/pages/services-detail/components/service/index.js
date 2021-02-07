import _ from 'lodash'
import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SectionService from '../section-service'
import Navigation from '../navigation'
import RelatedProjects from '../related-projects'
import './service.scss'

const Service = ({service}) => {

  const colorsHightLight = _.split(service.highlightsColors, ',');
  const sections = _.get(service, 'seccionesServicosCollection.items', [])
  
  return (
    <div className="container-fluid-services">
      <div className="box-title-service">
        <h1 className="title-service"><span>#0{service.orden}</span>{service.nombre}</h1>
        <p className="description-service">{service.descripcionEs}</p>      
      </div>
      <div className="highlight-services" style={{backgroundColor: `${colorsHightLight[0]}`}}>
        <div className="highlight-content-services">
          <div style={{color:`${colorsHightLight[1]}` }}>{documentToReactComponents(service.highlightsEs.json)}</div>

        </div>
      </div>
      
      {
        _.map(sections, (section)=> <SectionService  key={section.titulo} section={section}/>)
      }
      <RelatedProjects 
        projects={_.get(service, 'proyectosRelacionadoCollection.items')}
        servicesname={_.get(service,'nombre')}
        />
      <Navigation />

    </div>
  )

}

export default Service
