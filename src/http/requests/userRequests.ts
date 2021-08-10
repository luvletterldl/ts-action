import axios, { formConfig } from "..";
import { LoginReqType } from "../reqTypes/useReqTypes";
import { LoginResType } from "../resTypes/userResTypes";

export function login(params: LoginReqType): Promise<LoginResType> {
  return axios.post('xxx',{...params}, formConfig )
}

// export function login(params: User.LoginReq): Promise<User.LoginRes> {
//   return axios.post('xxx',{...params}, formConfig )
// }