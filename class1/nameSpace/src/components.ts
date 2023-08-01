namespace Components {
    export namespace SubComponent {
        export class Test {
            constructor() {
                const ele = document.createElement('div')
                ele.innerHTML = "test"
                document.body.appendChild(ele)
            }
        }
    }
    export class Header {
        constructor() {
            const ele = document.createElement('div')
            ele.innerHTML = "header"
            document.body.appendChild(ele)
        }
    }

    export class Body {
        constructor() {
            const ele = document.createElement('div')
            ele.innerHTML = "body"
            document.body.appendChild(ele)
        }
    }
    export class Footer {
        constructor() {
            const ele = document.createElement('div')
            ele.innerHTML = "footer"
            document.body.appendChild(ele)
        }
    }


}