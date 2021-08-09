// 接口

export enum Food {
  VEGETABLES = 'vegetables',
  BEEF = 'beef'
}

interface BaseUserInterface {
  name: string
  age: number
  readonly gender: number
  phone?: number
}

interface UserInterface extends BaseUserInterface {
  sayHello(): void
  eat(food: Food): void
  changeName(old: string): string
  [propName: string]: any
}

type BaseUserType = {
  name: string
  age: number
  readonly gender: number
  phone?: number
}

interface ExtendsBaseUserTypeUserInterface extends BaseUserType {
  sayHello(): void
  eat(food: Food): void
  changeName(old: string): string
  [propName: string]: any
}

type UserType = BaseUserInterface & {
  sayHello(): void
  changeName(old: string): string
  eat(food: Food): void
}


class User implements UserInterface {
  constructor(user: User) {
    this.name = user.name;
    this.age = user.age;
    this.gender = user.gender;
    this.phone = user.phone
  }
  [propName: string]: any;
  name: string;
  age: number;
  gender: number;
  phone?: number | undefined;
  sayHello(): void {
    console.log('hello')
  }
  changeName(old: string): string {
    this.name = 'new' + old
    return this.name
  }
  eat(food: Food): void {
    console.log('eat: ', food)
  }
}

class UserE implements ExtendsBaseUserTypeUserInterface {
  constructor(user: User) {
    this.name = user.name;
    this.age = user.age;
    this.gender = user.gender;
    this.phone = user.phone
  }
  [propName: string]: any;
  name: string;
  age: number;
  gender: number;
  phone?: number | undefined;
  sayHello(): void {
    console.log('hello')
  }
  changeName(old: string): string {
    this.name = 'new' + old
    return this.name
  }
  eat(food: Food): void {
    console.log('eat: ', food)
  }
}