function mediaDoVetor(numeros) {
    let media = 0
    let contador = 0 
    for(i=0; i<numeros.length; i++) {
        contador += numeros[i]
    }
    media = contador/ numeros.length
    return `A média é ${media}`
}

let array = [1,2,3,4,5]

console.log(mediaDoVetor(array))