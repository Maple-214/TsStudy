// 当参数不确定类型的时候可以使用泛型
const fn = <T>(a: T, b: T): T => a
// 不指定参数类型，根据类型自动推断
fn(1, 2)
// 指定参数类型
fn<number>(1, 2)

// 当需要多个不定参数类型
const fn3 = <T, K>(a: T, b: K): K => b

fn3(1, "2")
fn3<number, string>(1, "2")

interface Key {
    key: string
}

// 当需要对泛型进行约束时
const fn4 = <T, K extends Key>(a: T, b: K): K => b
fn4<number, Key>(1, { key: 'key' })


// 类中使用泛型
class Keys<T> {
    constructor(public age:T){}
}
const keys = new Keys(23)
console.log(keys.age);
