import { Game } from "./Game.js";

const game = new Game(
    document.getElementById("moving") as HTMLElement,
    document.getElementById('field') as HTMLElement
);

game.init();