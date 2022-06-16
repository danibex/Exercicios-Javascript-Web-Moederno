function PA(n, a1, r) {
    let termos = []
    termos.push(a1)
    let an = a1
    let soma = a1
    for(i=1; i<n; i++){
        an += r
        termos.push(an)
        soma += an
    }
    
    return `Termos da PA: ${termos}. A soma dos elementos é ${soma}`
}

function PG(n, a1, r) {
    let termos = []
    termos.push(a1)
    let an = a1
    let soma = a1
    for(i=1; i<n; i++){
        an *= r
        soma += an
        termos.push(an)
    }
    
    return `Termos da PG: ${termos}. A soma dos elementos é ${soma}`
}

console.log(PA(5, 3, 2)) // Numeros de elementos, Primeiro elemento, Razão
console.log(PG(5, 2, 2)) // Numeros de elementos, Primeiro elemento, Razão