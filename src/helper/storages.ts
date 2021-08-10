import config from "./config"

config.fun('test config')

// storage获取
export function storageGetter<T>(key: Storages.LocalStorageKey | Storages.SessionStorageKey , isLocal = true): T | null{
  const storageStr = isLocal ? localStorage.getItem(key as string) : sessionStorage.getItem(key as string)
  if (storageStr) {
    try {
      return JSON.parse(storageStr)
    } catch (err) {
      return storageStr as unknown as T
    }
  } else {
    return null
  }
}
// storage保存
export function storageSaver<T>(key: Storages.LocalStorageKey | Storages.SessionStorageKey, data: T, isLocal = true) {
  isLocal ? localStorage.setItem(key as string, JSON.stringify(data)) : sessionStorage.setItem(key as string, JSON.stringify(data))
}