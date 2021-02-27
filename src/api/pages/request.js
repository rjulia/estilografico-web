import axios from 'axios'
import { pageBySlug } from './queries'
import { url } from '../../constants'

export const getPage = async (slug) => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query: pageBySlug(`"${slug}"`)
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