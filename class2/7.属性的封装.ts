/**
 * 
 * 
 */

class Animations {
    private _root: string = 'Animations'
    public eyes: number = 2
    public legs: number = 4
}
class Cats extends Animations {
    public _name: string
    private _color: string = 'red'
    constructor({ name }: { name: string }) {
        super()
        this._name = name
    }
    get GetColor() {
        return this._color
    }
    set SetColor(color: string) {
        if (color) {
            this._color = color
        }
    }

}

const cats = new Cats({ name: '小猫咪' })
console.log(`--------'猫咪的颜色是：${cats.GetColor}--------'`);
console.log('-------我要改变猫咪的颜色--------');
cats.SetColor = 'blue'
console.log(`--------'猫咪的颜色是：${cats.GetColor}--------'`);
console.log('-------猫咪的结构--------');
console.log(cats);

