function bhaskara(a, b, c) {
    delta = (b ** 2) - (4 * a * c)
    if(delta < 0) {
        return `O delta é negativo! Não possui raízes reais`
    } else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b - Math.sqrt(delta)) / (2 * a)
        return [x1, x2]
    }
}

console.log(bhaskara(3, -5, 12)) // O delta é negativo! Não possui raízes reais
console.log(bhaskara(4, 4, 1))  // [ -0.5, -0.5 ]