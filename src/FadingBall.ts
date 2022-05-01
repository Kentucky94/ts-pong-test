export class FadingBall {
    private ball: HTMLElement;

    constructor (posX: string, posY: string) {
        this.ball = document.createElement("div");
        this.ball.classList.add("fading");
        this.ball.style.left = posX;
        this.ball.style.top = posY;
        this.ball.style.opacity = "1";
        
        requestAnimationFrame(this.fade.bind(this))
    }

    public getBall(): HTMLElement {
        return this.ball;
    }

    private fade (): void {
        const floatOpacity = parseFloat(this.ball.style.opacity) - 0.07;

        if (floatOpacity > 0) {
            this.ball.style.opacity = String(floatOpacity);
        } else {
            this.ball.remove();
            return;
        }

        requestAnimationFrame(this.fade.bind(this));
    }
}