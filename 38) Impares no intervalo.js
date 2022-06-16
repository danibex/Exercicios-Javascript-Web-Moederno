function impares(valor1 = 0, valor2 = 100) {
    let array = []
    if(valor1 > valor2) {
        let c = valor1
        valor1 = valor2
        valor2 = c
        for(i=valor1; i<valor2; i++)
            if(i % 2 != 0) {
                array.push(i)
            }
    } else {
        for(i=valor1; i<valor2; i++)
            if(i % 2 != 0) {
                array.push(i)
            }
    }
    return array 
}

console.log(impares(90))