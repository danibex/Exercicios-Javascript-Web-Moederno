function parImpar(numeros) {
    let par = 0
    let impar = 0
    for(i=0; i<numeros.length; i++) {
        if(numeros[i] % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    return `Existem: ${par} números pares, e ${impar} números impares`
}

let array = [1,2,6,8,5,68,5,5,46,457,5]

console.log(parImpar(array))