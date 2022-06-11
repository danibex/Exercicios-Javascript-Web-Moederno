let pontuacao = "10 20 20 8 25 3 0 30 1"

function Jogos(pontos) {
let array = pontos.split(" ")
let pior = array[0]
let posicao = 0
let contador = 0
let teste = 0

for(i in array) {
    if(array[i] < pior) {
        pior = array[i]
        posicao = Number(i) + 1
    }
    if(array[i] > teste) {
        teste = array[i]
        contador++
    }
}

return [contador, posicao]
}


console.log(Jogos(pontuacao))