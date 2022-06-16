function maiorEmenor(numeros) {
    let maior = numeros[0]
    let menor = numeros[0]
    for(i=0; i<numeros.length; i++) {
        if(numeros[i] > maior) {
            maior = numeros[i]
        } else if(numeros[i] < menor) {
            menor = numeros[i]
        }
    }
    return `O menor valor é ${menor} e o maior valor é ${maior}`
}


let array = [2,6,8,5,68,1,5,5,46,457,5]

console.log(maiorEmenor(array))