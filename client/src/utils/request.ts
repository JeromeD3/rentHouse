import axios, { AxiosInstance } from 'axios'
import proxy from '@/config/host'

const env = import.meta.env.MODE || 'development'
const API_HOST = proxy[env].API

const SUCCESS_CODE = 200
const TIMEOUT = 5000

export const instance: AxiosInstance = axios.create({
  baseURL: API_HOST,
  timeout: TIMEOUT,
  withCredentials: true,
})

instance.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  (response) => {
    if (response.status === 200) {
      console.log('========请求成功========')
      const { data } = response
      if (data.code === SUCCESS_CODE) {
        return data
      }
      return data
      // return Promise.reject(data)
    }
    return Promise.reject(response?.data)
  },
  (e) => Promise.reject(e)
)

export default instance
