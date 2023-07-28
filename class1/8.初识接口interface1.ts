interface Furits {
    type: string
    price: number
    desc?: string
}

const FuritsFn = (params: Furits): string => {
    const { type, price, desc } = params
    return type + price + desc
}
console.log(FuritsFn({ type: 'type', price: 100, desc: 'desc' }));
console.log(FuritsFn({ type: 'type2', price: 200, desc: 'desc2' }));

