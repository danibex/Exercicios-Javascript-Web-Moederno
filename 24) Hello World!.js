// Repetição com while
function falarWhile() {
let i = 0
    while (i<10) {
        console.log(`Hello World!`)
        i++
    }
    return `Hello World!`
}

// Repetição com for
function falarFor() {
    for(i=0 ; i<10; i++){
        console.log("Hello World!")
    }
    return `Hello World!`
}

console.log(falarFor())
console.log(falarWhile())