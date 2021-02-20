import axios from 'axios'
import { profileBySlug } from './queries'
import { url } from '../../constants'

export const getProfile = async (slug) => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query: profileBySlug(`"${slug}"`)
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