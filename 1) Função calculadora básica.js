
// Normal function
function Calcular1(n1, n2) {
    soma = n1 + n2
    subtracao = n1 - n2
    multiplicacao = n1 * n2
    divisao = n1 / n2
    console.log(`Os números foram ${n1} e ${n2}.`)
    console.log(`A soma é: ${soma}.`)
    console.log(`A diferença é: ${subtracao}.`)
    console.log(`O produto é: ${multiplicacao}.`)
    console.log(`A divisão é: ${divisao}.`) 
}

// Arrow function
const Calcular2 = (n1, n2) => {
    soma = n1 + n2
    subtracao = n1 - n2
    multiplicacao = n1 * n2
    divisao = n1 / n2
    console.log(`Os números foram ${n1} e ${n2}.`)
    console.log(`A soma é: ${soma}.`)
    console.log(`A diferença é: ${subtracao}.`)
    console.log(`O produto é: ${multiplicacao}.`)
    console.log(`A divisão é: ${divisao}.`) 
}

console.log(Calcular1(10, 2))
console.log(Calcular2(9, 3))