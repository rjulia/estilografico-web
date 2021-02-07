import _ from 'lodash'
import React, {useEffect} from 'react'
import { useServices } from '../../hooks'
import { Spinner } from '../../components';
import Service from './components/service'

const ServicesDetail = ({location}) => {
  const { service, apiGetService } = useServices();
  const slug = _.last(_.split(location.pathname, '/'))

  useEffect(() => {
    apiGetService(slug)
  }, [slug])

  if (_.isEmpty(service)) {
    return <Spinner />
  }
  return (
    <Service service={service}/>
  )
}

export default ServicesDetail
