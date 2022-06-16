// Normal Function
//Método 1:
function bissexto1(ano) { 
if (ano % 400 != 0) {
    if (ano % 100!= 0) {
        if (ano % 4 != 0) {
            return [`O ano ${ano} não é bissexto!`, false]
        } else {
            return [`O ano ${ano} é bissexto!`, true]
        }
    } else {
        return [`O ano ${ano} é bissexto!`, true]
    }
} else {
    return [`O ano ${ano} é bissexto!`, true]
}
}
// Método 2
function bissexto2(ano) {
if(ano % 400 === 0 || ano % 100 === 0 || ano % 4 === 0) {
    return [`O ano ${ano} é bissexto!`, true]
} else {
    return [`O ano ${ano} não é bissexto!`, false]
}
} 

console.log(bissexto1(2020)) // [ 'O ano 2022 não é bissexto!', false ]
console.log(bissexto2(2021)) // [ 'O ano 2022 não é bissexto!', false ]

// Arrow function
// Método 1
const bissexto3 = (ano) => {
    if (ano % 400 != 0) {
        if (ano % 100!= 0) {
            if (ano % 4 != 0) {
                return [`O ano ${ano} não é bissexto!`, false]
            } else {
                return [`O ano ${ano} é bissexto!`, true]
            }
        } else {
            return [`O ano ${ano} é bissexto!`, true]
        }
    } else {
        return [`O ano ${ano} é bissexto!`, true]
    }
}
// Método 2
const bissexto4 = (ano) => {
    if(ano % 400 === 0 || ano % 100 === 0 || ano % 4 === 0) {
        return [`O ano ${ano} é bissexto!`, true]
    } else {
        return [`O ano ${ano} não é bissexto!`, false]
    }
}

console.log(bissexto3(2022)) // [ 'O ano 2022 não é bissexto!', false ]
console.log(bissexto4(2023)) // [ 'O ano 2022 não é bissexto!', false ]
