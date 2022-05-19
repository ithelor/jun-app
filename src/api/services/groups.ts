import { AxiosResponse } from 'axios'

import API from 'api/api.instance'
import IGroup from 'interfaces/Group.interface'

export const getGroups = (): Promise<AxiosResponse<IGroup[]>> => {
  return API.get(`groups`)
}

export const getGroup = (id: string): Promise<AxiosResponse<IGroup>> => {
  return API.get(`groups/${id}`)
}
