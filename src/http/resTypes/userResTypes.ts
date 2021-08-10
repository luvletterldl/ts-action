import { BaseResType } from "./BaseResType";

export type LoginResType = BaseResType<{
  id: number
  nickname: string | null
  token: string
  expiredTime: number
}>