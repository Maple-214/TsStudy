/**
 * 1.namespace 防止全局变量污染
 * 2.外部要使用哪个就导出哪个
 * 3.命名空间可以嵌套使用
 * 
 * 
 * 4.可以改import语法
 * 5.打出来的js用到是reuire浏览器不支持，需要引入requie.js插件支持下
 * 6.require写法 require(['page'],(page)=>{new page.default()})
 * 
 * 
 */
namespace Home {
    export class Page {
        constructor() {
            new Components.Header()
            new Components.Body()
            new Components.Footer()
            new Components.SubComponent.Test()
        }
    }

}
