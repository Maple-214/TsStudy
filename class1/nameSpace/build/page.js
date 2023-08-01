"use strict";
var Components;
(function (Components) {
    let SubComponent;
    (function (SubComponent) {
        class Test {
            constructor() {
                const ele = document.createElement('div');
                ele.innerHTML = "test";
                document.body.appendChild(ele);
            }
        }
        SubComponent.Test = Test;
    })(SubComponent = Components.SubComponent || (Components.SubComponent = {}));
    class Header {
        constructor() {
            const ele = document.createElement('div');
            ele.innerHTML = "header";
            document.body.appendChild(ele);
        }
    }
    Components.Header = Header;
    class Body {
        constructor() {
            const ele = document.createElement('div');
            ele.innerHTML = "body";
            document.body.appendChild(ele);
        }
    }
    Components.Body = Body;
    class Footer {
        constructor() {
            const ele = document.createElement('div');
            ele.innerHTML = "footer";
            document.body.appendChild(ele);
        }
    }
    Components.Footer = Footer;
})(Components || (Components = {}));
/**
 * 1.namespace 防止全局变量污染
 * 2.外部要使用哪个就导出哪个
 *
 *
 */
var Home;
(function (Home) {
    class Page {
        constructor() {
            new Components.Header();
            new Components.Body();
            new Components.Footer();
            new Components.SubComponent.Test();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));
