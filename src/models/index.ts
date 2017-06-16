export interface IResponse<T> {
  code: string
  message: string
  resource: string
  request_id: string
  data: T
}

export interface ISession {
  id: string
  name: string
}

export interface ITodo {
  id: string
  title: string
  content: string
  due: number
  finished: boolean
  created_at: number
  updated_at: number
}
