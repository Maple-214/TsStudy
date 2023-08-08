class Food {
    private Elem: HTMLElement
    constructor() {
        this.Elem = document.querySelector('#food')!
    }
    get X() {
        return this.Elem.offsetLeft
    }
    get Y() {
        return this.Elem.offsetTop
    }
    public changePosition(): void {
        // 左边临界值0，右边= 容器宽-食物宽
        let x = Math.round(Math.random() * 29) * 10
        let y = Math.round(Math.random() * 29) * 10
        this.Elem.style.left = x + 'px'
        this.Elem.style.top = y + 'px'
    }
}

class ScorePanel {
    private score: number = 0
    public level: number = 1
    private ScoreElem: HTMLElement
    private LevelElem: HTMLElement
    private maxLevel: number = 10
    private upLevel: number = 10

    constructor() {
        this.ScoreElem = document.querySelector('#score')!
        this.LevelElem = document.querySelector('#level')!
    }
    public addScore() {
        this.ScoreElem.innerHTML = ++this.score + ''
        if (this.score % this.upLevel === 0) {
            this.addLevel()
        }
    }
    public addLevel() {
        if (this.level < this.maxLevel) {
            this.LevelElem.innerHTML = ++this.level + ''
        }
    }
    get GetMaxLevel() {
        return this.maxLevel
    }
    set SetMaxLevel(level: number) {
        this.maxLevel = level
    }
    get GetMaxUpLevel() {
        return this.upLevel
    }
    set SetMaxUpLevel(level: number) {
        this.upLevel = level
    }

}


class Snake {
    private head: HTMLElement
    private body: HTMLCollectionOf<HTMLDivElement>
    private container: HTMLElement
    constructor() {
        this.head = document.querySelector("#snake #head")!
        this.body = document.querySelector("#snake")!.getElementsByTagName("div")
        this.container = document.querySelector('#snake')!
    }
    get GetX() {
        return this.head.offsetLeft
    }
    set SetX(value: number) {
        if (this.GetX === value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error("游戏结束！！");
        }
        if (this.body[1] && (this.body[1].offsetLeft === value)) {
            if (value > this.GetX) {
                value = this.GetX - 10
            } else {
                value = this.GetX + 10
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkBody()
    }
    get GetY() {
        return this.head.offsetTop
    }
    set SetY(value: number) {
        console.log(value,this.GetY);
        
        if (this.GetY === value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error("游戏结束！！");
        }
        if (this.body[1] && (this.body[1].offsetTop === value)) {
            if (value > this.GetY) {
                value = this.GetY - 10
            } else {
                value = this.GetY + 10
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkBody()
    }
    public addBody() {
        this.container.insertAdjacentHTML('beforeend', '<div></div>')
        // const oDiv = document.createElement('div')
        // this.container.appendChild(oDiv)
    }

    public moveBody() {
        for (let i = this.body.length - 1; i > 0; i--) {
            let x = this.body[i - 1].offsetLeft
            let y = this.body[i - 1].offsetTop
            this.body[i].style.left = x + 'px'
            this.body[i].style.top = y + 'px'
        }
    }

    public checkBody(){
        for (let i = 1; i < this.body.length; i++) {
            let body = this.body[i]
            if((this.GetX === body.offsetLeft) &&(this,this.GetY === body.offsetTop)){
                throw new Error("游戏结束！！");
            }
        }
    }

}

export default class GaneControl {
    private food: Food
    private scorePanel: ScorePanel
    private snake: Snake
    // up 38 down 40 left 37 right 39
    private direction: number = 0
    private gameOver: boolean = false
    constructor() {
        this.food = new Food
        this.scorePanel = new ScorePanel
        this.snake = new Snake
        this.init()
    }
    public init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    private keydownHandler(event: KeyboardEvent) {
        this.direction = event.keyCode || event.which
    }

    private run() {
        let x = this.snake.GetX
        let y = this.snake.GetY
        // up 38 down 40 left 37 right 39
        switch (this.direction) {
            case 38:
                y -= 10
                break;
            case 40:
                y += 10
                break;
            case 37:
                x -= 10
                break;
            case 39:
                x += 10
                break;
            default:
                break;
        }
        this.isEatFood(x, y)


        try {
            this.snake.SetX = x
            this.snake.SetY = y
        } catch (e) {
            alert(e)
            this.gameOver = true
        }
        !(this.gameOver) && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    private isEatFood(x: number, y: number) {
        if ((this.food.X === x) && (this.food.Y === y)) {
            this.food.changePosition()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }

}