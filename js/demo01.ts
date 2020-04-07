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