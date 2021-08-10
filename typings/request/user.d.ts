enum ResCode {
  SUCC = '000000',
  FAIL = '000001',
}

type BaseRes<T> = {
  msg: string
  code: ResCode
  result: T
  status: boolean
}
// 在d.ts中，使用declare与declare global两个作用是相等的。
declare namespace User {
  type LoginReq = {
    username: string
    password: string
  }
  type LoginRes = BaseRes<{
    id: number
    name: string
    avatar: string | null
    access_token: string
    expired_time: number
  }>
}