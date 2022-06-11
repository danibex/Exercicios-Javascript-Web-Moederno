function analise(nota) {
if (nota >= 38) {
    if(nota % 5 === 0) {
        return `O aluno foi aprovado com nota ${nota}!`
    } else {
        if(nota - (Math.ceil(nota/5)*5) < 3) {
            return `A nota do aluno ${nota} foi arredondada para e ele foi aprovado`   
        } else {
            return `A nota: ${nota} do aluno não pode ser arredondada mas ele foi aprovado!`  
        }
        
/*         if((nota) - (Math.ceil(nota / 5) * 5) < 3) {
            return `A nota do aluno ${nota} foi arredondada para ${Math.ceil(nota / 5) * 5} e ele foi aprovado`   
        } else {
            return `A nota: ${nota} do aluno não pode ser arredondada mas ele foi aprovado!`  
        } */
    }    
} else {
    return `Aluno reprovado!!!`
}
}

let n = 51
console.log(analise(n))

console.log(54 - (Math.ceil(51 / 5) * 5)) 