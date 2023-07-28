/**
 * 1.受 private保护的的变量不能被外部访问，但是可以设置set和get进行操作
 * 2.static 修饰静态属性或方法
 * 
 * 
 */
class Demo {
    constructor(private _namse: string) { }
    get GetName() {
        return this._namse
    }
    set SetName(names: string) {
        this._namse = names
    }
    static s_name:string = 'static_name'
}

const demo = new Demo('names')
console.log(demo.GetName);

demo.SetName = '---names'
console.log(demo.GetName);
console.log(Demo.s_name);



