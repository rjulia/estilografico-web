import _ from 'lodash'
import React from 'react'
import { Link } from "react-router-dom";
import './profile.scss'

const Profile = ({profile}) => {
  return (
    <div className="profile-container">
        <Link to={`/equipo/${_.get(profile, 'slug')}`}>
        <div className="profile-box">
          <div className="profile-image">
            <img src={_.get(profile, 'fotoPerfil.url')} alt={_.get(profile, 'fotoPerfil.title')}/>
          </div>
          <div className="profile-content">
            <p className="profile-name">{_.get(profile, 'nombre')}</p>
            <p className="profile-title">{_.get(profile, 'titulo')}</p>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default Profile
