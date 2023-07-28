class Animals {
    name = 'animals'
    say() {
        return (`我是---->${this.name}`)
    }
}
class Cat extends Animals {
    say(): string {
        // return '我是----->cat'
        return super.say()
    }
}
const animals = new Animals
const cat = new Cat
// console.log(animals.say());
console.log(cat.say());