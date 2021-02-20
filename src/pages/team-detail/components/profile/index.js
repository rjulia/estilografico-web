import _ from 'lodash'
import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  ContentHighlight,
  Helmet,
} from '../../../../components'
import './profile.scss'

const Profile = ({profile}) => {

  console.log(profile)
  const {
    description,
    fotoPerfil,
    frasesDestacadasCollection,
    listaDeHabilidades,
    nombre,
    urlLinkedin,
  } = profile

  const frases = _.get(frasesDestacadasCollection, 'items', [])

  return (
    <div className="container-fluid-profile">
      <Helmet 
        title={nombre}
        />
      <div className="box-profile">
        <div className="colum-left-profile">
          <div className="name-profile">
            <h1>{nombre}</h1>
          </div>
          <div className="image-profile">
            <img src={_.get(fotoPerfil, 'url')} alt={_.get(fotoPerfil,'title')}/>
          </div>
          <dvi className="highlights-profile">
            {frases && _.map(frases, (frase, idx) => <ContentHighlight key={idx} textQuotes ={_.get(frase, 'frase.json')}/>)}
          </dvi>

        </div>
        <div className="colum-right-profile">
            <div className="habilities-profile">
              <ul>
                {listaDeHabilidades && _.map(listaDeHabilidades, (habilidad, idx) => <li key={idx}><span></span>{habilidad}</li>)}

              </ul>
            </div>
            <div className="descriptio-profile">
              {documentToReactComponents(_.get(description, 'json'))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
