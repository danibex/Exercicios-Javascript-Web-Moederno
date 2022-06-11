// Normal function
function divisao1(dividendo, divisor) {
    res = dividendo / divisor
    resto = dividendo % divisor
    return `A divisão de entre ${dividendo} e ${divisor} é ${res.toFixed(2)}, e o resto da divisão é ${resto}`
    
}

// Arrow function
const divisao2 = (dividendo, divisor) => {
    res = dividendo / divisor
    resto = dividendo % divisor
    return `A divisão de entre ${dividendo} e ${divisor} é ${res.toFixed(2)}, e o resto da divisão é ${resto}`
}


console.log(divisao1(10, 3))
console.log(divisao2(5, 3))