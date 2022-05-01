export class FadingBall {
    constructor(posX, posY) {
        this.ball = document.createElement("div");
        this.ball.classList.add("fading");
        this.ball.style.left = posX;
        this.ball.style.top = posY;
        this.ball.style.opacity = "1";
        requestAnimationFrame(this.fade.bind(this));
    }
    getBall() {
        return this.ball;
    }
    fade() {
        const floatOpacity = parseFloat(this.ball.style.opacity) - 0.07;
        if (floatOpacity > 0) {
            this.ball.style.opacity = String(floatOpacity);
        }
        else {
            this.ball.remove();
            return;
        }
        requestAnimationFrame(this.fade.bind(this));
    }
}
