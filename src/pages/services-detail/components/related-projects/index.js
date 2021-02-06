import _ from 'lodash'
import React from 'react'
import './related-projects.scss'
import {BoxProject} from '../../../../components'

const RelatedProjects = ({projects, servicesname}) => {
  console.log(projects)
  return (
    <div className="container-home-projects">
      <div className="box-title-projects">
        <h2>HEMOS DESARROLLADO <span>{servicesname}</span> CON </h2>
      </div>
      {
        _.map(projects, (project) => (<BoxProject project={project} key={project.sys.id}/>))
      }
    </div>
  )
}

export default RelatedProjects
