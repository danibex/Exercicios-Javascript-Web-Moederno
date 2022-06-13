function calcularPreco(codigoDoProduto, quantidade) {
    switch (codigoDoProduto) {
        case 100:
            preco = quantidade * 3
            return `Valor final do cachorro quente: RS ${preco.toFixed(2)} reais`
        break
        case 200:
            preco = quantidade * 4
            return `Valor final do hambúrguer simples: RS ${preco.toFixed(2)} reais`
        break
        case 300:
            preco = quantidade * 5.5
            return `Valor final do cheeseburguer: RS ${preco.toFixed(2)} reais`
        break
        case 400:
            preco = quantidade * 7.5
            return `Valor final do baurú: RS ${preco.toFixed(2)} reais`
        break
        case 500:
            preco = quantidade * 3.5
            return `Valor final do refrigerante: RS ${preco.toFixed(2)} reais`
        break
        case 600:
            preco = quantidade * 2.8
            return `Valor final do suco: RS ${preco.toFixed(2)} reais`
        break     
        default:
            return `[ERRO] Produto inexistente!`   
    }
}

console.log(calcularPreco(100, 5))