// 基础类型

export enum CODE_LANG {
  C = 'c',
  JAVA_SCRIPT = 'javascript',
  TYPE_SCRIPT = 'typescript',
  PY = 'python',
  GO = 'go',
  JAVA = 'java',
  CPP = 'cpp',
  RUST = 'rust',
}

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

// 利用 never 类型的特性来实现全面性检查
type Foo = string | number;

function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo;
  }
}

type BaseType = {
  bool: boolean
  num: number
  string: string
  symb: Symbol
  arr: Array<any>
  enum: CODE_LANG
  any: any
  unk: unknown
  tuple: [number, string]
  void: undefined
  null: null
  undefined: undefined
  obj: object
  Obj: Object
  noSub: {}
}