// 函数

function unknownFunc(params) {
  console.log(params)
}

function inputParamTypeFunc(params: string | number) {
  console.log(params)
}

function inputReturnTypeFunc(time: number): Promise<boolean> {
  return new Promise((rs, rj) => {
    if (time % 2 === 0) {
      rs(true)
    } else {
      rj(false)
    }
  })
}

// 重载
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: string, b: number): string;
  add(a: number, b: string): string;
  add(a: number | string, b: number | string) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
    return a + b;
  }
}

const calculator = new Calculator();
const result = calculator.add('Semlinker', ' Kakuqo');

// 配合泛型
export enum StorageType {
  USER = 'user',
  OPENID = 'openid',
}

type User = {
  name: string
  age: number
  gender: number
}

export function getStorageWrap<T>(key: StorageType): T | null {
  const dataStr = localStorage.getItem(key)
  if (dataStr) {
    try {
      return JSON.parse(dataStr)
    } catch {
      return dataStr as unknown as T
    }
  } else {
    return null
  }
}

const userInfo = getStorageWrap<User>(StorageType.USER)
const openid = getStorageWrap<string>(StorageType.OPENID)
// const openid: string | null = getStorageWrap(StorageType.OPENID)
console.log('username: ', userInfo!.name, 'openid: ', openid)