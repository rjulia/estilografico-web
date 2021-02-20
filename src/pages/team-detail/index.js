import _ from 'lodash'
import React, {useEffect, useState} from 'react'
import { Spinner } from '../../components'
import { getProfile } from '../../api/profile/request'

import Profile from './components/profile'

const ServicesDetail = ({location}) => {
  const [profile, setProfile] = useState({})
  const slug = _.last(_.split(location.pathname, '/'))
  useEffect(() => {
    getProfile(slug).then((response) => {
      setProfile(_.get(response, 'data.perfilCollection.items[0]'))
    })
  }, [slug])

  if (_.isEmpty(profile)) {
    return <Spinner />
  }
  
  return (
    <Profile profile={profile}/>
  )
}

export default ServicesDetail