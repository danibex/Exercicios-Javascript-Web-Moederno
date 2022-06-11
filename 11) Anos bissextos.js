// Normal Function
function bissexto1() { 
if (ano % 400 != 0) {
    if (ano % 100!= 0) {
        if (ano % 4 != 0) {
            return [`O ano ${ano} não é bissexto!`, true]
        } else {
            return [`O ano ${ano} é bissexto!`, false]
        }
    } else {
        return [`O ano ${ano} é bissexto!`, false]
    }
} else {
    return [`O ano ${ano} é bissexto!`, false]
}
}

function bissexto2() {
if(ano % 400 === 0 || ano % 100 === 0 || ano % 4 === 0) {
    return [`O ano ${ano} é bissexto!`, true]
} else {
    return [`O ano ${ano} não é bissexto!`, false]
}
} 

let ano = 2022

console.log(bissexto1(ano))
console.log(bissexto2(ano))