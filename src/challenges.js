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
  a = wins * 3
  b = ties * 1
  return (a + b)
}

// Desafio 6
function highestCount(a) {
  let maiorNumero = a[0]
  let contador = 0
  for (let i = 0; i < a.length; i += 1) {
    if (maiorNumero < a[i]){
       maiorNumero = a[i]
    }
  }
  for (index = 0; index < a.length; index += 1)
    if (maiorNumero === a[index]){
      contador += 1
    }
    return contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return 'cat1'}

  else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)){
    return 'cat2'}

  else (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse));{ 
    return 'os gatos trombam e o rato foge'}
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
