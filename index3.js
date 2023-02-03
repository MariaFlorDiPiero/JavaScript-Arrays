const arraysNums = [1, 2, 3, 4];

function multiplicaPorDez(num) {
    return num * 10;
}

const arraySomada = arraysNums.map(multiplicaPorDez);

console.log(arraySomada);