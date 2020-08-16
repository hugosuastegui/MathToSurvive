// Canvas.js contiene la manipualción del DOM y la inicialización del canvas y el contexto
const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")
const $startButton = document.querySelector(".start-button")

// Math variables initialization
let x0 = 0, operand = 0, operandString = '', result = 0
