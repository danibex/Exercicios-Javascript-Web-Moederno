// Normal function
function exponencial1(base, expoente) {
    res = base ** expoente
    return `O numero ${base} elevado a ${expoente} é ${res}`
}

// Arrow function
const exponencial2 = (base, expoente) => {
    res = base ** expoente
    return `O numero ${base} elevado a ${expoente} é ${res}`
}

console.log(exponencial1(2, 10))
console.log(exponencial2(2, 50))
