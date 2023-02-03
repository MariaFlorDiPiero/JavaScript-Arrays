const numeros = [100, 200, 300, 400, 500, 600];

//Primeira expressão: é executada apenas uma única vez
//Segunda expressão: condição de execução
//Terceira expressão: executada sempre ao final do bloco


for (let indice = 0; indice < numeros.length; indice++) {

    console.log(numeros[indice])

}

const numeros2 = [100, 200, 300, 400, 500, 600];

for (let i = numeros2.length - 1; i >= 0; i--) {
  console.log(numeros2[i]);
}

const numeros3 = [100, 200, 300, 400, 500, 600];

for (let i = numeros3.length - 1; i >= 0; i -= 2) {
  console.log(numeros3[i]);
}

const numeros4 = [100, 200, 300, 400, 500, 600];

for (let i = numeros4.length - 1; numeros4[i] >= 300; i -= 2) {
  console.log(numeros4[i]);
}

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);

