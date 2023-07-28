// Person 与 Person2 constructor 写法完全等价
class Person {
    constructor(protected _names: string) {
    }
    // 不写constructor 默认 constructor(){}
}
class Person2 {
    protected _names: string
    constructor(names: string) {
        this._names = names
    }
}

class Child extends Person {
    constructor(public _age: number, public _names: string) {
        // 子类继承父类，写构造函数，必须调用super()，即使父类不写constructor 也会默认生成一个空的constructor，所以super()是必学写的
        super(_names)
    }
}
const p1 = new Person('name')
const p2 = new Person('name2')
const c1 = new Child(23,'names')


// console.log(p2._names);
// console.log(c1._names);
// console.log(c1._age);



