import _ from 'lodash'
import React, {useEffect} from 'react'
import './services.scss'
import { useServices } from '../../hooks'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Spinner } from '../../components';
import { SectionService, RelatedProjects, Navigation } from './components'
import './services.scss'

const ServicesDetail = ({location}) => {
  const { service, apiGetService } = useServices();

  console.log(service, _.isEmpty(service))
  useEffect(() => {
    apiGetService(location)
  }, [location])
  const colorsHightLight = _.split(service.highlightsColors, ',');
  if (_.isEmpty(service)) {
    return <Spinner />
  }
  const sections = _.get(service, 'seccionesServicosCollection.items', [])
  return (
    <div className="container-fluid-services">
      <div className="box-title-service">
        <h1 className="title-service"><span>#0{service.orden}</span>{service.nombre}</h1>
        <p className="description-service">{service.descripcionEs}</p>      
      </div>
      <div className="highlight-services" style={{backgroundColor: `${colorsHightLight[0]}`}}>
        <div className="highlight-content-services">
          <p style={{color:`${colorsHightLight[1]}` }}>{documentToReactComponents(service.highlightsEs.json)}</p>

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

export default ServicesDetail
