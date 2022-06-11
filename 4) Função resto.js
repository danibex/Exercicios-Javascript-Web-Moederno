// Normal function
function divisao1(dividendo, divisor) {
    res = dividendo / divisor
    resto = dividendo % divisor
    console.log(`A divisão de entre ${dividendo} e ${divisor} é ${res.toFixed(2)}, e o resto da divisão é ${resto}`)
    return `Fim`
}

// Arrow function
const divisao2 = (dividendo, divisor) => {
    res = dividendo / divisor
    resto = dividendo % divisor
    console.log(`A divisão de entre ${dividendo} e ${divisor} é ${res.toFixed(2)}, e o resto da divisão é ${resto}`)
    return `Fim`
}


console.log(divisao1(10, 3))
console.log(divisao2(5, 3))