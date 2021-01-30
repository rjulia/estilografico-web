import React, {useEffect} from 'react'
import './services.scss'
import { getQueryServices, getQueryService } from '../../api/services/request'

const Services = () => {
  console.log("hey")
  useEffect(() => {
    getQueryServices()
    getQueryService()

  }, [])
  return (
    <div>
      Services
    </div>
  )
}

export default Services
