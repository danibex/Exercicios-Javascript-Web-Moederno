// Normal function
function jurosSimples(capital, juros, tempo) {
    juros = juros / 100
    ms = capital * juros * tempo
    return ms
}
function jurosComposto(capital, juros, tempo) {
    juros = juros / 100
    mc = capital * (1 + juros) ** tempo
    return mc
}

//Arrow function
const jurosSimples1 = (capital, juros, tempo) => {
    juros = juros / 100
    ms = capital * juros * tempo
    return ms
}
const jurosComposto1 = (capital, juros, tempo) => {
    juros = juros / 100
    mc = capital * (1 + juros) ** tempo
    return mc
}


console.log(jurosSimples(100, 20, 2))
console.log(jurosComposto(100, 20, 2))
console.log(jurosSimples1(100, 20, 2))
console.log(jurosComposto1(100, 20, 2))