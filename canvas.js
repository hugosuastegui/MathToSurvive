// Canvas.js contiene la manipualción del DOM y la inicialización del canvas y el contexto
const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")
const $startButton = document.querySelector(".start-button")

// Math variables initialization
let intervalId,
x0 = 100,
y = 100,
operand = 0,
operandString = '+',
result = 10,
frames = 0,
timeToSolve = 10,
timeLeft = 10,
ans = 0,
userInput = [],
fuelOn = true,
score = 0, 
level = 1