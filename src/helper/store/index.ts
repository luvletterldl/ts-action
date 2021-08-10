import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { storageGetter } from '../storages'

export interface UserState {
  username: string,
  userDetail: User.LoginRes['result']
}

export const key: InjectionKey<Store<UserState>> = Symbol()

export const store = createStore<UserState>({
  state: {
    username: storageGetter<User.LoginRes>(Storages.LocalStorageKey.USERINFO, true)?.result?.name || '',
    userDetail: null as unknown as User.LoginRes['result']
  },
  mutations: {
    updateUsername(state, username: string) {
      state.username = username
    },
    updateUserDetail(state, newUserDetail: User.LoginRes['result']) {
      state.userDetail = newUserDetail
    }
  },
  actions: {
    updateUsernameAct(context, username: string) {
      context.commit('updateUsername', username)
    }
  },
  getters: {
    getUsername(state) {
      return state.username
    },
    getUserDetail(state) {
      return state.userDetail
    }
  }
})
