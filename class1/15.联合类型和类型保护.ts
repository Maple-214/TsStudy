/**
 * 断言
 * typeof
 * instanceof  只能用在calss接口
 * 
 * 
 * 
 */
interface type1 {
    name: string
    say: () => void
    flag: boolean
}
interface type2 {
    name: string
    flag: boolean
    say2: () => void
}
class Type3 {
    count: number
}
(params: type1 | type2) => {
    // 断言1
    if (params.flag) {
        (params as type1).say()
    } else {
        (params as type2).say2()
    }

    // 断言2
    if ('say' in params) {
        params.say()
    } else {
        params.say2
    }

}
(params1: string | number, params2: string | number) => {
    if (typeof params1 === 'string' || typeof params2 === 'string') {
        return `${params1} + ${params2}`
    } else {
        return params1 + params2
    }

}
(params1: object | Type3, params2: object | Type3) => {
    if (params1 instanceof Type3 && params2 instanceof Type3) {
        return params1.count + params2.count
    }
    return 0

}