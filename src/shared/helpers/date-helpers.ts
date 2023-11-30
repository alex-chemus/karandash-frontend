import { HttpResponse } from "../../api/Api"
import * as dayjs from 'dayjs'

export const DATE_FORMAT = 'YYYY-MM-DD'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DateToString<T extends { [k: string]: any }> = T & {
  date: dayjs.Dayjs
}

type Res = {
  [k: string]: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const responseDateFormatter = async <T extends Res>(res: HttpResponse<T, any>): Promise<HttpResponse<T, any>> => {
  const newDataEntries = Object.entries(res.data).map(entry => {
    const [key, value] = entry
    return [
      key,
      key === 'date' ? dayjs(value, DATE_FORMAT) : value
    ]
  })

  return { ...res, data: Object.fromEntries(newDataEntries) as T }
}