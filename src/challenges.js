// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return (frase.split(' '));
}

// Desafio 4
function concatName(a) {
  return `${a[a.length - 1]}, ${a[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let a = wins * 3;
  let b = ties * 1;
  return (a + b);
}

// Desafio 6
function highestCount(a) {
  let maiorNumero = a[0];
  let contador = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (maiorNumero < a[i]) {
      maiorNumero = a[i];
    }
  }
  for (let index = 0; index < a.length; index += 1) {
    if (maiorNumero === a[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(a) {
  let b = [];

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] % 3 === 0 && a[i] % 5 !== 0) {
      b.push('fizz');
    } else if (a[i] % 3 !== 0 && a[i] % 5 === 0) {
      b.push('buzz');
    } else if (a[i] % 3 === 0 && a[i] % 5 === 0) {
      b.push('fizzBuzz');
    } else {
      b.push('bug!');
    }
  }
  return b;
}

// Desafio 9
function encode(array) {
  let encodedArray = '';
  encodedArray = array.replace(/a/g, 1);
  encodedArray = encodedArray.replace(/e/g, 2);
  encodedArray = encodedArray.replace(/i/g, 3);
  encodedArray = encodedArray.replace(/o/g, 4);
  encodedArray = encodedArray.replace(/u/g, 5);
  return encodedArray;
}
function decode(encodedArray) {
  let decodedArray = '';
  decodedArray = encodedArray.replace(/1/g, 'a');
  decodedArray = decodedArray.replace(/2/g, 'e');
  decodedArray = decodedArray.replace(/3/g, 'i');
  decodedArray = decodedArray.replace(/4/g, 'o');
  decodedArray = decodedArray.replace(/5/g, 'u');
  return decodedArray;
}

// Desafio 10
function techList(tech, name) {
  tech = tech.sort();
  const objects = [];
  if (tech.length > 0) {
    for (tech of tech) {
      const object = {
        tech,
        name,
      };
      objects.push(object);
    }
    return objects;
  }
  return 'Vazio!';
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
