import _ from 'lodash'
import React from 'react'
import ContentHighlight from '../content-highlight'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import './section-services.scss'

const SectionServices = ({
  section,
}) => {

  const quotes = _.get(section, 'destacadosCollection.items', [])
  return (
    <div 
      className="container-section-services"
      style={{backgroundColor: section.bgc}}>
      <div className="content-section-services">
        <div className="colunm-left-section-services">
        {documentToReactComponents(_.get(section, 'contenido.json'))}

        </div>
        <div className="colunm-right-section-services">
          {
          quotes &&  _.map(quotes, (quote, idx) => <ContentHighlight key={idx} textQuotes ={_.get(quote, 'frase.json')}/>)
          }

        </div>

      </div>
    </div>
  )
}

export default SectionServices
