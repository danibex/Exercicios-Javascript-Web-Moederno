let numeros1 = [1,2,3,4,5,6,7,8]
let numeros2 = [1,2,3,4,5,6,7,8]

function multiplicandoVetores(array, numero) {
    for(i in array) {
        array[i] *= numero
    }
    return array
}

function multiplicandoVetoresMaiores(array, numero) {
    for(i in array) {
        if(array[i]>5) {
            array[i] *= numero
        }
    }
return array
}
 
console.log(multiplicandoVetores(numeros1, 2))
console.log(multiplicandoVetoresMaiores(numeros2, 2))