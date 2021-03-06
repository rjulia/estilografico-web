import axios from 'axios'
import { pageBySlug, pagesQuery } from './queries'
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

export const getPages = async () => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query: pagesQuery
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