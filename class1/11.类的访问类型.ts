/*
1.public 公开，外部可访问，继承可访问，本身内部可访问
2.private 私有，外部不可访问，继承不可访问，本身内部可访问
3.protected 受保护，外部不可访问，继承可访问，本身内部可访问
*/
class Animals2 {
     private _names = 'name'
     protected _ages = 12
}
class Cat2 extends Animals2 {
    hell() {
        this._ages
    }

}
const animals2 = new Animals2



