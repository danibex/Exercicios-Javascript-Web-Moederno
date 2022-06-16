function conceito(notas) {
    for(i in notas) {
        if (notas[i] >= 0 && notas[i] <= 4.9) {
            notas[i] = `Nota ${notas[i]} Conceito: D`
        } else if (notas[i] >= 5 && notas[i] <= 6.9) {
            notas[i] = `Nota ${notas[i]} Conceito: C`
        } else if (notas[i] >= 7 && notas[i] <= 8.9) {
            notas[i] = `Nota ${notas[i]} Conceito: B`
        } else if (notas[i] >= 9 && notas[i] <= 10) {
            notas[i] = `Nota ${notas[i]} Conceito: A`
        } else {
            notas[i] += ` Nota inválida`
        }
    }
    return notas
}

let teste = [2, 5.5, 8, 9.5]

console.log(conceito(teste))