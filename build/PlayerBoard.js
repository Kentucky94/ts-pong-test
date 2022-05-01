"use strict";
// document.addEventListener("keydown", event => {
//     const element = document.getElementById("controlled") as HTMLElement;
//     if (event.key === "w") {
//         moveUp(element, speed);
//     } else if (event.key === "s") {
//         moveDown(element, speed);
//     } else if (event.key === "a") {
//         moveLeft(element, speed);
//     } else if (event.key === "d") {
//         moveRight(element, speed);
//     }
// })
// export function moveLeft (element: HTMLElement, speed: number) {
//     moveItem(element, Direction.Left, speed);
// }
// export function moveRight (element: HTMLElement, speed: number) {
//     moveItem(element, Direction.Right, speed);
// }
// export function moveUp (element: HTMLElement, speed: number) {
//     moveItem(element, Direction.Up, speed);
// }
// export function moveDown (element: HTMLElement, speed: number) {
//     moveItem(element, Direction.Down, speed);
// }
// function moveItem (element: HTMLElement, direction: Direction, speed: number): void {
//     const xPos = parseInt(element.style.left) || element.getBoundingClientRect().x;
//     const yPos = parseInt(element.style.top) || element.getBoundingClientRect().y;
//     switch (direction) {
//         case "left":
//             element.style.left = `${xPos - speed}px`;
//             break;
//         case "right":
//             element.style.left = `${xPos + speed}px`;
//             break;
//         case "up":
//             element.style.top = `${yPos - speed}px`;
//             break;
//         case "down":
//             element.style.top = `${yPos + speed}px`;
//             break
//         default:
//             return;
//     }
// }
