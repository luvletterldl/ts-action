// 泛型

import { CODE_LANG } from "./baseType";
import { StorageType } from "./function";

enum Hobbies {
  MOVIE = 'movie',
  MUSIC = 'music',
  DELICACY = 'delicacy',
  GAME = 'game'
}

// 接口泛型 类型约束
interface Person<T extends Hobbies> {
  name: string,
  hobby: T,
}
// 获取Person<Hobbies>类型的所有键，返回的是联合类型
type PersonKeyType = keyof Person<Hobbies> // "name" | "hobby"

// 泛型条件
// https://www.bilibili.com/video/BV1ff4y1Y7G2?from=search&seid=3597907648164769300

type Dog<T = string> = { name: string, type: T }

type ChineseCatCallType = 'mi-mi-mi'

type AmericaCatCallType = 'kitty-kitty-kitty'

type ItalianCatCallType = 'michio-michio-michio'

type GermanCatCallType = 'Stardenburdenhardenbart'

type Cat<T> = T extends ChineseCatCallType ? ChineseCatCallType
  : T extends AmericaCatCallType ? AmericaCatCallType 
  : T extends ItalianCatCallType ? ItalianCatCallType 
  : GermanCatCallType


function adopt<T>(dog: Dog<T>) {
  return dog
}

const dog = { name: 'ww', type: 'hsq' }  // 这里按照Dog类型的定义一个type为string的对象
adopt(dog)  // Pass: 函数会根据入参类型推断出type为string

function getStorageWrap<T>(key: StorageType): T | null {
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

getStorageWrap(StorageType.OPENID)

type PersonType<T> = {
  name: string
  hobby: T
}

class Coder<T extends PersonType<Hobbies>, U extends CODE_LANG[]> implements Person<Hobbies> {
  constructor(person: T, langs: U) {
    this.hobby = person.hobby
    this.name = person.name
    this.code_lang = langs
  }
  hobby: Hobbies;
  name: string;
  code_lang?: CODE_LANG[];
}

const coder = new Coder<PersonType<Hobbies>, CODE_LANG[]>({
  name: 'ldl',
  hobby: Hobbies.MUSIC
}, [CODE_LANG.JAVA_SCRIPT, CODE_LANG.TYPE_SCRIPT, CODE_LANG.PY, CODE_LANG.CPP, CODE_LANG.RUST]);

type Animal = {
  name: string
  age: number
  category: string
  eat: () => void
}

// Partial<T>
const noNameAnimal: Partial<Animal> = {
  name: undefined,
  age: 9,
  eat: () => {
    console.log('eat')
  },
}

// Record<K, T>
const obj: Record<string, string> = { 'name': 'zhangsan', 'tag': '打工人' }

// Pick<T, K>
const bird: Pick<Animal, "name" | "age"> = { name: 'bird', age: 1 }

// Exclude<T, U>
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;   // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

// Omit<T, K>
const OmitAnimal:Omit<Animal, 'name'|'age'> = { category: 'lion', eat: () => { console.log('eat') } }

type PhoneFunType = {
  call: () => void
  playGame?: () => void
}

const gamePhone: Required<PhoneFunType> = {
  call: () => {
    console.log('call')
  },
  // playGame: () => {
  //   console.log('playGame')
  // }
}

// ReturnType<T>
type FooType = ReturnType<<T>() => T>;  // T