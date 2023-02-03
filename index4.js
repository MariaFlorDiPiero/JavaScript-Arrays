const numeros= [43, 50, 65, 12];

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma)

// Outra forma de escreve o mesmo código
// const soma = numeros.reduce(function (acc, atual) {
//     return atual + acc
//    }, 0)

// Outra forma de escrever o mesmo código
// function operacaoNumerica(acc, atual) {
//  return atual + acc
// }

// const soma = numeros.reduce(operacaoNumerica, 0)