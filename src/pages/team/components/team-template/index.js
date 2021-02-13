import _ from 'lodash'
import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  Section,
} from '../../../../components'
import './team-template.scss'

const TeamTemplate = ({team}) => {

  const colorsHightLight = _.split(team.highlightsColors, ',');
  const sections = _.get(team, 'seccionesServicosCollection.items', [])
  
  return (
    <div className="container-fluid-team">
      <div className="box-title-team">
        <h1 className="title-team">{team.nombre}</h1>
        <p className="description-team">{team.descripcionEs}</p>      
      </div>
      <div className="highlight-team" style={{backgroundColor: `${colorsHightLight[0]}`}}>
        <div className="highlight-content-team">
          <div style={{color:`${colorsHightLight[1]}` }}>{documentToReactComponents(team.highlightsEs.json)}</div>

        </div>
      </div>
      
      {
        _.map(sections, (section)=> <Section  key={section.titulo} section={section}/>)
      }


    </div>
  )

}

export default TeamTemplate
