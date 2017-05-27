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
