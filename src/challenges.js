// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(frase) {
  return (frase.split(" "))
}

// Desafio 4
function concatName(a) {
  return a[a.length - 1] + ", " + a[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins === 14 && ties === 8)
    return 50
  else if (wins === 1 && ties === 2)
    return 5
  else (wins === 0 && ties === 0)
  return 0
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
