function decimal(valor) {
    valorConcertado = valor.toFixed(2).replace(".",",")
    return `R$ ${valorConcertado}`
}

console.log(decimal(0.2 + 0.1))