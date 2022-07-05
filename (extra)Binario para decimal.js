function binarioParaDecimal(array) {
    array = array.reverse()
    let sum = 0
    for(i = 0; i < array.length; i++) {
        if(array[i] == 1) {
            sum += 2 ** i
        }          
    }
    return sum
}

let arrayTest = [0,0,1,1]

console.log(binarioParaDecimal(arrayTest))