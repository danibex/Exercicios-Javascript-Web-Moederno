// Normal function
function troco(valor) {
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    while(valor > 0) {
        if(valor >= 100) {
            nota100++
            valor -= 100
        } else if(valor >= 50) {
            nota50++
            valor -= 50
        } else if(valor >= 10) {
            nota10++
            valor = valor - 10
        } else if(valor >= 5) {
            nota5++
            valor = valor - 5
        } else if(valor >= 1) {
            nota1++
            valor = valor - 1
        }
    }
    return [`1 real: ${nota1}`, `5 reais: ${nota5}`, `10 reais: ${nota10}`, `50 reais: ${nota50}`, `100 reais: ${nota100}`]
}

console.log(troco(1872))
