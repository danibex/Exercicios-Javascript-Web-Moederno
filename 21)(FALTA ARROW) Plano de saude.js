// Normal function
function debito(idade) {
let valor = 100
    if (idade >=0 && idade <= 10) {
        valor += 80
        return `Valor a ser pago: R$ ${valor.toFixed(2).replace(".",",")}`
    } else if (idade > 10 && idade <= 30) {
        valor += 50
        return `Valor a ser pago: R$ ${valor.toFixed(2).replace(".",",")}`
    } else if (idade > 30 && idade <= 60) {
        valor += 95
        return `Valor a ser pago: R$ ${valor.toFixed(2).replace(".",",")}`        
    } else if (idade > 60) {
        valor += 130
        return `Valor a ser pago: R$ ${valor.toFixed(2).replace(".",",")}`
    } else {
        return `[ERRO] Idade inválida`
    }
}

console.log(debito(5)) // Valor a ser pago: R$ 180,00
console.log(debito(15)) // Valor a ser pago: R$ 150,00
console.log(debito(50)) // Valor a ser pago: R$ 195,00
console.log(debito(70)) // Valor a ser pago: R$ 230,00
console.log(debito(-5)) // [ERRO] idade inválida