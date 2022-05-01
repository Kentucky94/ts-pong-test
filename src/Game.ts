import { FadingBall } from "./FadingBall.js";

enum Direction {
    Left = "left",
    Right = "right",
    Up = "up",
    Down = "down"
}

export class Game {
    private directionX: Direction.Left | Direction.Right = Direction.Right;
    private directionY: Direction.Up | Direction.Down = Direction.Down
    private directionAngle : number = 15;
    private speed: number = 10;
    private ball: HTMLElement;
    private board: HTMLElement;

    constructor (ball: HTMLElement, board: HTMLElement) {
        this.ball = ball;
        this.board = board;
    } 

    public init (): void {
        requestAnimationFrame(this.tick.bind(this));
    }

    private tick(): void  {    
        this.moveBallWithAngle(this.ball, this.directionAngle, this.speed);
    
        requestAnimationFrame(this.tick.bind(this));
    }

    private moveBallWithAngle (element: HTMLElement, angle: number, speed: number): void {
        const radians = angle * Math.PI / 180;
        const xPos = parseInt(element.style.left) || element.getBoundingClientRect().x;
        const yPos = parseInt(element.style.top) || element.getBoundingClientRect().y;
        const xDelta = Math.cos(radians) * speed;
        const yDelta = Math.sin(radians) * speed;
        
        switch (this.directionX) {
            case "left":
                element.style.left = `${xPos - xDelta}px`;
                break;
            case "right":
                element.style.left = `${xPos + xDelta}px`;
                break;
            default:
                return;
        }

        switch (this.directionY) {
            case "up":
                element.style.top = `${yPos - yDelta}px`;
                break;
            case "down":
                element.style.top = `${yPos + yDelta}px`;
                break
            default:
                return;
        }

        this.reflect();
        this.addFadingBall();
    }

    private reflect(): void {
        const ballRect = this.ball.getBoundingClientRect();
        const boardRect = this.board.getBoundingClientRect();

        if (ballRect.top <= boardRect.top) {
            this.directionY = Direction.Down;
        } else if (ballRect.bottom >= boardRect.bottom) {
            this.directionY = Direction.Up;
        }

        if (ballRect.left <= boardRect.left) {
            this.directionX = Direction.Right;
        } else if (ballRect.right >= boardRect.right) {
            this.directionX = Direction.Left;
        }
    }

    private addFadingBall(): void {
        const fadingBall = new FadingBall(this.ball.style.left, this.ball.style.top);
        document.body.append(fadingBall.getBall());
    }
}