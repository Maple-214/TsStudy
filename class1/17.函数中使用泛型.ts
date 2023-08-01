/**
 * 
 * 
 * 定义时先不指定类型，等用到了再声明
 */
function T<T>(params1: T, params2: T) {
    return params1 + '' + params2;
}
T<number>(1, 1);
const A = <A>(params1: A, params2: A) => {
    if ((typeof params1 && typeof params2) === 'number') {
        return (params1 as number) + (params2 as number)
    }
    return params1 + '' + params2
}
A<number>(1, 2)
A<string>("1", "2")

// 泛型中熟组的使用
function Arr<T>(params1: T[]) {
    return params1
}
Arr<number>([1, 2, 3])