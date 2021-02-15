import _ from 'lodash'
import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getProject } from '../../api/projects/request'
import { Spinner } from '../../components';
import './project-detail.scss'

const Projectos = ({location}) => {
  const [project, setProject] = useState({})
  const slug = _.last(_.split(location.pathname, '/'))
  console.log('hello')
  useEffect(() => {
    getProject(slug).then((response) => {
      setProject(_.get(response, 'data.projectoCollection.items[0]'))
    })
  }, [slug])

  if (_.isEmpty(project)) {
    return <Spinner />
  }
  const {
    contenido,
    portada,
    listaDeVideos,
    listaDeObjectivos,
    listaDeImagesCollection,
    subtitulo,
    titulo
  } = project

  return (
    <div className="container-fluid-project-detail">
      <div className="header-image-project-detail">
        <div
          className="container-box-image-project-detail"
          style={{
            backgroundImage: `url(${portada.url})`,
          }}/>
        </div>
      <div className="header-title-project-detail">
        <div className="title-project-detail">
          <h1>{titulo}</h1>
        </div>
        <div className="list-objectives-project-detail">
          <ul >
            {
              listaDeObjectivos > 0 && _.map(listaDeObjectivos, objectivo => (
                <li key={objectivo}>{objectivo}</li>
              ))
            }
          </ul>
        </div>
        <div className="content-project-detail">
          <div>{contenido && documentToReactComponents(contenido.json)}</div>
        </div>
      </div>
      <div className="list-images-project-detail">
        {
          listaDeImagesCollection.items.length > 0 && _.map(listaDeImagesCollection.items, (image) => (
            <div className="box-image-project-detail" key={image.url}>
              <div>
                <img src={image.url || ''} alt={_.get(image,'title', '')} />
              </div>
              <div className="image-descrption-project-detail">
                <span>{image.description}</span>
              </div>
            </div>
          ))
        }
      </div>
      <div className="list-videos-project-detail">
        {
          listaDeVideos && _.map(listaDeVideos, (videoUrl) => (
            <div className="videos-project-detail" key={videoUrl}>
              <ReactPlayer url={videoUrl}  width={'100%'} height="600px"/>
            </div>
          ))
        }
      </div>
  
    </div>
  )
}

export default Projectos
