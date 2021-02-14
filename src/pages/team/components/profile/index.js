import _ from 'lodash'
import React from 'react'
import './profile.scss'

const Profile = ({profile}) => {
  return (
    <div className="profile-container">
      <di className="profile-image">
        <img src={_.get(profile, 'fotoPerfil.url')} alt={_.get(profile, 'fotoPerfil.title')}/>

      </di>
      <div className="profile-content">
        <p className="profile-name">{_.get(profile, 'nombre')}</p>
        <p className="profile-title">{_.get(profile, 'titulo')}</p>
      </div>
    </div>
  )
}

export default Profile
