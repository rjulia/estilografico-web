import React from 'react'
import { NavLink, Link } from "react-router-dom";
import './box-project.scss';

const BoxProject = ({
  project
}) => {

  const {
    titulo,
    subtitulo,
    id,
    slug,
    portada
  } = project
  return (
    <div className="container-box-project">
      <div className="box-box-project">
        <div className="content-box-project">
          <h3>{titulo}</h3>
          <p>{subtitulo}</p>
        </div>
        <div className="button-box-project">
          <Link to={`/projects/${slug}`}>
            <p>VER <span>+</span></p>
          </Link>
        </div>
      </div>
      <div
        className="container-box-image-project"
        style={{
          backgroundImage: `url(${portada.url})`,
        }}/>
      
    </div>
  )
}

export default BoxProject
