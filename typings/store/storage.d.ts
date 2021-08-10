declare namespace Storages {
  enum LocalStorageKey {
    USERINFO = 'userinfo',
    TOKEN = 'token'
  }

  enum SessionStorageKey {

  }

  type UserInfoValue = {
    id: number
    name: string
    avatar: string | null
  }

  type TokenValue = {
    access_token: string
    expired_time: number
  }
}