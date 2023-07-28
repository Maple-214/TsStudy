interface Furits2 {
    type: string
    price: number
    desc?: string
    // 允许任意key  value
    [propname: string]: any
    say: () => string
}

const FuritsFn2 = (params: Furits2): string => {
    const { type, price, desc, say } = params

    return type + price + desc + say()
}

class ClassFuritsFn2 implements Furits2 {
    [propname: string]: any
    type: string
    price: number
    desc?: string | undefined
    say: () => string
    type2: string

}

interface FuritsFn3 extends Furits2 {
    type3: string

}
console.log(FuritsFn2({ type: 'type', price: 100, desc: 'desc', say: () => 'say' }));
console.log(FuritsFn2({ type: 'type2', price: 200, desc: 'desc2', say: () => 'say2' }));

