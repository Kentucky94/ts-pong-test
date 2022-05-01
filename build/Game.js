import { FadingBall } from "./FadingBall.js";
var Direction;
(function (Direction) {
    Direction["Left"] = "left";
    Direction["Right"] = "right";
    Direction["Up"] = "up";
    Direction["Down"] = "down";
})(Direction || (Direction = {}));
export class Game {
    constructor(ball, board) {
        this.directionX = Direction.Right;
        this.directionY = Direction.Down;
        this.directionAngle = 15;
        this.speed = 10;
        this.ball = ball;
        this.board = board;
    }
    init() {
        requestAnimationFrame(this.tick.bind(this));
    }
    tick() {
        this.moveBallWithAngle(this.ball, this.directionAngle, this.speed);
        requestAnimationFrame(this.tick.bind(this));
    }
    moveBallWithAngle(element, angle, speed) {
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
                break;
            default:
                return;
        }
        this.reflect();
        this.addFadingBall();
    }
    reflect() {
        const ballRect = this.ball.getBoundingClientRect();
        const boardRect = this.board.getBoundingClientRect();
        if (ballRect.top <= boardRect.top) {
            this.directionY = Direction.Down;
        }
        else if (ballRect.bottom >= boardRect.bottom) {
            this.directionY = Direction.Up;
        }
        if (ballRect.left <= boardRect.left) {
            this.directionX = Direction.Right;
        }
        else if (ballRect.right >= boardRect.right) {
            this.directionX = Direction.Left;
        }
    }
    addFadingBall() {
        const fadingBall = new FadingBall(this.ball.style.left, this.ball.style.top);
        document.body.append(fadingBall.getBall());
    }
}
