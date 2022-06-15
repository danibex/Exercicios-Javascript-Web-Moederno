// Normal function
function pagamento(valor, mes) {
    if (mes >= 1 && mes <= 12) {
        if(mes != 1) {
            valor = valor * (1.05) ** mes
            return `Valor a ser pago (com juros):  R$ ${valor.toFixed(2).replace(".",",")}`
        } else {
            return `Valor a ser pago: R$ ${valor.toFixed(2).replace(".",",")}`
        }
    } else { 
        return `[ERRO] Mês inválido`
    }
}

console.log(pagamento(100, 12))