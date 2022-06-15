function intervalo(numeros) {
    let dentro = 0
    let fora = 0
    for(i=0; i<numeros.length; i++) {
        if(numeros[i] > 10 && numeros[i] < 20) {
            dentro++
        } else {
            fora++
        }
    }
    return `Existem ${dentro} números entre 10 e 20, e ${fora} números fora desse intervalo.` 
}

let array = [1,5,6,12,15,17,20,25]

console.log(intervalo(array))