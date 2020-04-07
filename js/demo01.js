"use strict";
var str = 'hello world';
var str1 = 'hell0 world 1';
// 元组也是数组一种 (tuple) 
var tuple = [1, 'this is tuplle'];
// 变量中有几个数据类型就有几个数据
/**
 * 错误写法
 * let tuple:[number, string] = [1, 'this is tuplle', 2, 'this is']
 */
// 数组
var arr = [1, 2];
var arr1 = [1, 2];
// 枚举类型
// 如果标识符没有赋值 得到的值为下标
var flag;
(function (flag) {
    flag[flag["success"] = 1] = "success";
    flag[flag["error"] = 0] = "error";
})(flag || (flag = {}));
var s = flag.error;
// 任意类型 不指定类型的或为任意类型
var btn = document.getElementById('id');
// undefined 与null
var num;
var num2; // number或者为undefined
// 方法 指定返回值类型
function run() {
}
function run1() {
    return 1;
}
//never 类型 是null undefined  子类型 觉得不会出现的类型
