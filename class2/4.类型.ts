/**
 * 1.number
 * 2.string
 * 3.boolean
 * 4.字面量 let a: 'a'
 * 5.any 任意类型 
 * 6.unknow 未知
 * 7.voild
 * 8.null
 * 9.undefind
 * 10.never
 * 11.enum
 * 12.array
 * 13.tuple 元组 固定长度的数组
 * 14.object
 * 
 * 
 * 如果声明变量不指定类型，会默认设置为any
 * any类型的值可以赋值给其他变量，unknow不能
 * 
 */
let a: unknown
let b: string
a = 'a'

// 当判断确切值以后可以赋值给其他变量
b = a as string
b = <string>a
if (typeof a === 'string') {
    b = a
}

function _Error(): never {
    throw new Error("error");
}

let c: { name: string, age?: number, [propName: string]: any }
c = { name: 'c' }

let fn: (a: number, b: number) => number
fn = (a, b) => a + b
fn(1, 2)

let arr: string[]
let arr2: Array<number>

enum _Enum {
    man,
    women
}
// & 表示同时
let _$: { name: string } & { age: number }

// type 类型别名
type _type = 1 | 2 | 3
let T: _type