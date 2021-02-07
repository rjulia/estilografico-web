import axios from 'axios'
import { queryProjects, queryProject } from './queries'
import { url } from '../../constants'


export const getProjects = async () => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query:queryProjects
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_CONTENFUL_TOKEN}`,
      }
    })
    return response.data


  } catch (error) {
    console.log("error", error);
  }
}

export const getProject = async (slug) => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query: queryProject(`"${slug}"`)
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