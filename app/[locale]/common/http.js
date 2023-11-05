import axios from "axios";

export default axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_HOST}`,
    headers: {
		  Accept: 'application/json',
    }
})

const corporateAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_CORPORATE_API_HOST}`,
  headers: {
    Accept: 'application/json',
  }
})
const hcdAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HCD_API_HOST}`,
  headers: {
    Accept: 'application/json',
  }
})
export {
  corporateAPI,
  hcdAPI
}
