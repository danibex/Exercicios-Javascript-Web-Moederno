function negativos(numeros) {
    let contador = 0
    for(i=0; i<numeros.length; i++) {
        if(numeros[i] < 0) {
            contador++
        }
    }
    return `Há ${contador} números negativos.`
}

let array = [2,6,-8,5,68,1,-5,5,-46,457,5]

console.log(negativos(array))