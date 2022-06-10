let lado1 = 1
let lado2 = 2
let lado3 = 3

if(lado1 != 0 && lado2 != 0 && lado3 != 0) {
if(lado1 == lado2 && lado2 == lado3) {
    console.log(`O triângulo de lados: ${lado1}, ${lado2} e ${lado3} é equilátero!`)
}  else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    console.log(`O triângulo de lados: ${lado1}, ${lado2} e ${lado3} é Isóceles!`)
} else {
    console.log(`O triângulo de lados: ${lado1}, ${lado2} e ${lado3} é Escaleno!`)
}
} else {
    console.log("Não existe triângulo com um dos lados igual a 0")
}