import { AxiosResponse } from 'axios'

import API from 'api/api.instance'
import INews from 'interfaces/News.interface'

export const getNews = (): Promise<AxiosResponse<INews[]>> => {
  return API.get(`news`)
}

export const getOneNews = (id: string): Promise<AxiosResponse<INews>> => {
  return API.get(`news/${id}`)
}
