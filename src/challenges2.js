// Desafio 11
function generatePhoneNumber(numbers) {
  let phoneNumber = '(';

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (number of numbers) {
    let checkCount = 0;
    for (checkedNumber of numbers) {
      if (checkedNumber === number) {
        checkCount += 1;
      }
    }
    if (number < 0 || number > 9 || checkCount >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let index in numbers) {
    if (index === 1) {
      phoneNumber += `${numbers[index]}) `;
    } else if (index === 6) {
      phoneNumber += `${numbers[index]}-`;
    } else {
      phoneNumber += numbers[index];
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    if (lineA > (Math.abs(lineB - lineC)) && lineB > (Math.abs(lineA - lineC)) && lineC > (Math.abs(lineA - lineB))) {
      return true;
    }
    return false;
  }
  return false;
}

// Desafio 13
function hydrate(drinks) {
  let numbers = drinks.match(/\d/g).map(Number);
  let total = 0;
  for (number of numbers) {
    total += number;
  }
  if (total > 1) {
    let result = `${total} copos de água`;
    return result;
  }
  let result = `${total} copo de água`;
  return result;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
