
// Normal function
function Calcular1(n1, n2) {
    soma = n1 + n2
    subtracao = n1 - n2
    multiplicacao = n1 * n2
    divisao = n1 / n2
    return`Os números foram ${n1} e ${n2}.\nA soma é: ${soma}.\nA diferença é: ${subtracao}.\nO produto é: ${multiplicacao}.\nA divisão é: ${divisao}.\n`
}

// Arrow function
const Calcular2 = (n1, n2) => {
    soma = n1 + n2
    subtracao = n1 - n2
    multiplicacao = n1 * n2
    divisao = n1 / n2
    return`Os números foram ${n1} e ${n2}.\nA soma é: ${soma}.\nA diferença é: ${subtracao}.\nO produto é: ${multiplicacao}.\nA divisão é: ${divisao}.\n`
}

console.log(Calcular1(10, 2))
console.log(Calcular2(9, 3))