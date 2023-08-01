// 泛型的继承
interface Goods {
    name: string
}
class SelectGoods<T extends Goods> {
    constructor(private goods: T[]) { }
    getGoods(index: number): string {
        return this.goods[index].name
    }
}
const g = new SelectGoods([{ name: '1' }, { name: '2' }])

// 泛型的约束
class SelectGoods2<T extends string | number> {
    constructor(private goods: T[]) { }
    getGoods(index: number): T {
        return this.goods[index]
    }
}
const g2 = new SelectGoods2<number>([1, 2, 3])