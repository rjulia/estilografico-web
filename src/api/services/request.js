import axios from 'axios'
import { queryService, queryServicies } from './queries'
import { url } from '../../constants'



export const getQueryServices = async () => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query: queryServicies
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_CONTENFUL_TOKEN}`,
      }
    })
    console.log(response)
    return response.data


  } catch (error) {
    console.log("error", error);
  }
}

export const getQueryService = async () => {
  console.log(queryService('"7vneRIvvL5i1o1MQgYsRsP"'))
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query: queryService('"7vneRIvvL5i1o1MQgYsRsP"')
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_CONTENFUL_TOKEN}`,
      }
    })
    console.log(response)

    return response.data


  } catch (error) {
    console.log("error", error);
  }
}