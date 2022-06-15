function pares() {
    i = 0
    while (i <= 100) {
        if (i % 2 == 0) {
            console.log(i)
        }
        i++
    }
    return `FIM!`
}

console.log(pares())