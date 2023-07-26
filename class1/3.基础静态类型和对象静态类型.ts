// 1.基础静态类型
const base: number | string | null | undefined | boolean = 1
// 2.对象静态类型
const obj: {
    obj1: string
    obj2: number
} = {
    obj1: 'obj1',
    obj2: 1
}
const arr: number[] = [1, 2, 3]
const fn: () => string = () => "fn"