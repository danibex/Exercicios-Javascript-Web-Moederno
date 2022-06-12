// Normal function
function calculadora(n1, n2, operacao) {
    switch (operacao) {
        case "+":
            res = Number(n1) + Number(n2) 
        break
        case "-":
            res = n1 - n2
        break
        case "*":
            res = n1 * n2
        break
        case "/":
            res = n1 / n2
        break
        default:
            return `[ERRO] Operação inválida!`
        break
    }
    return res
}

console.log(calculadora(10, 2, " "))