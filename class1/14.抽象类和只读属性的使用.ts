/**
 * 1. readonly 只读修饰符
 * 2. abstract 抽象修饰符
 * 
 * 
 * 
 */
class Demo2 {
    constructor(public readonly sex: number) { }
}
const d2 = new Demo2(1)
// 无法赋值
// d2.sex = 1


abstract class Abstract {
    abstract say(): string
}

class Abstract2 extends Abstract {
    say() {
        return 'hello'
    }
}

const ab2 = new Abstract2

console.log(ab2.say());
