function salario(salario, plano) {
    switch (plano) {
        case "A":
        novoSalario = salario * 1.1
        break
        case "B":
        novoSalario = salario * 1.15
        break
        case "C":
        novoSalario = salario * 1.2
        break
        default:
        return `[ERRO] Plano inválido.`
        break
    }
    return novoSalario
}
console.log(salario(1000, "C"))
