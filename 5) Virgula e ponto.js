// Normal function
function decimal1(valor) {
    valorConcertado = valor.toFixed(2).replace(".",",")
    return `R$ ${valorConcertado}`
}

// Arrow functiom
const decimal2 = (valor) => {
    valorConcertado = valor.toFixed(2).replace(".",",")
    return `R$ ${valorConcertado}`
}

console.log(decimal1(0.2 + 0.1))
console.log(decimal2(0.2 + 0.1))