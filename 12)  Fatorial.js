function fatorial(n) {
    let resultado = 1
    for(i = n; i > 1; i--) {
        resultado *= i
    }
    return resultado
}

console.log(fatorial(7)) // 5040
console.log(fatorial(8)) // 40320