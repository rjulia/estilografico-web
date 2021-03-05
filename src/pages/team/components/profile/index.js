import _ from 'lodash'
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './profile.scss'

const Profile = ({profile}) => {
  const [hover, setHover] = useState(false)

  const trigger = () => {
    setHover(!hover)
  }
  const imgUrl = () => { 
    if (hover) {
      return _.get(profile, 'fotoFerfilHover.url')
    }
    return _.get(profile, 'fotoPerfil.url')
  }
  return (
    <div className="profile-container">
        <Link to={`/equipo/${_.get(profile, 'slug')}`}>
        <div className="profile-box">
          <div 
            className="profile-image" 
            onMouseOver={trigger}
            onMouseOut={trigger}>
            <img src={imgUrl()} alt={_.get(profile, 'fotoPerfil.title')}/>
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
