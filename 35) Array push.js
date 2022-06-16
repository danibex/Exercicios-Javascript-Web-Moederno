let vetoPilha = [1,2,3,4,5]
let vetorAdiciona = [6,7,8,9,10]
// Método Simples
function adicionarSimples(array1, array2) {
    let novoArray = array1.concat(array2)
    return novoArray
}

console.log(adicionarSimples(vetoPilha, vetorAdiciona))

// Método Alternativo
function adicionarAlternativo(array1, array2) {
    for(i in array1) {
        array1.push(array2[i])
    }
    return array1
}

console.log(adicionarAlternativo(vetoPilha, vetorAdiciona))
