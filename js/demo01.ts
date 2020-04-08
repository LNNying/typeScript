let str:string = 'hello world'
let str1:string = 'hell0 world 1'

// 元组也是数组一种 (tuple) 
let tuple:[number, string] = [1, 'this is tuplle']
// 变量中有几个数据类型就有几个数据
/**
 * 错误写法
 * let tuple:[number, string] = [1, 'this is tuplle', 2, 'this is']
 */

 // 数组
 let arr:number[] = [1,2]

 let arr1:Array<number> = [1, 2]

 // 枚举类型
 // 如果标识符没有赋值 得到的值为下标
enum flag {success = 1, error = 0}
let s:flag = flag.error 


// 任意类型 不指定类型的或为任意类型
let btn:any = document.getElementById('id')
// undefined 与null
let num:undefined
let num2:number | undefined // number或者为undefined

// 方法 指定返回值类型

function run():void {

}
function run1():number {
    return 1
}

//never 类型 是null undefined  子类型 觉得不会出现的类型

// 方法  默认返回值为void 
function runs(name:string, age:number) : void {


}
interface inter {
    name: string,
    age: number,
    sex ?: string // 可选参数必须配置在所有参数之后
}
// 匿名方法
let fun = function() {

}
let funs = function(info:inter) {
    console.log(info.age)
}

funs({name: '123', age: 23})

// 默认参数
let fund = function(name:string = '23434') {
    console.log(name)
}

// 剩余参数  类型为数组 必须放在所有参数之后
let funr = function(name:string, ...result:number[]) {
    console.log(result)
}

//函数的重载 函数名一样但是参数个数或类型不同 不能有方法提 只有在any类型中才能定义方法体 在总方法的类型都为any 多余的参数可定为可选参数

function funf(age:number):number;
function funf(name:string):string;

function funf(str:any):any{
    if (typeof str === 'string') {
        return '1'
    } else {
        return 1
    }
}

let arrInter: inter[] = [{name: '', age: 10},{name: '', age: 13}]

function f(){};

// 相当于一个方法
interface inter2 {
    (name:string, age: number): boolean
}
// 方法的参数必须与inter2括号参数一致
let fung : inter2 = function(name: string, age: number) {
    return false;
}

// 接口中定义数组
interface inters {
    [index: number] : string, // 数组数据   这样的接口应该不能有其他变量
    length: number // 数组的长度
}
let arre:inters = ['23','23','23']
console.log(arre)
console.log(arre.length)

/**
 * 像[{},{},{}] 的集合
 * 可以通过把接口当做一个类型声明一个数组如 ler arr : interr[] = [] 
 */

 /**
  * class中实现接口implements 和java差不多
  * 实现接口的变量 的class必须有一个构造器
  */

  interface intery {
      dateTime: Date,
      name: string,
      age: number
  }

  class infod  implements intery{
    dateTime: Date
    name: string
    age: number
    constructor(dateTime:Date, name:string, age:number) {
        this.dateTime = dateTime
        this.name = name
        this.age = age
    }

  }
