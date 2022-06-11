let dia = 8
if (dia >= 1 && dia <= 7) {
    if (dia == 1 || dia == 7) {
        switch (dia) {
            case 1:
                console.log("Hoje é Domingo!")
                console.log("Final de semana!")
            break
            case 7:
                console.log("Hoje é Sábado!")
                console.log("Final de semana!")
            break
        }
    } else {
        switch (dia) {
            case 2:
                console.log("Hoje é Segunda!")
                console.log("Dia útil!")
            break
            case 3:
                console.log("Hoje é Terça!")
                console.log("Dia útil!")
            break
            case 4:
                console.log("Hoje é Quarta!")
                console.log("Dia útil!")
            break
            case 5:
                console.log("Hoje é Quinta!")
                console.log("Dia útil!")
            break
            case 6:
                console.log("Hoje é Sexta!")
                console.log("Dia útil!")
            break
        }     
    }
} else {
    console.log("Dia Inválido")
}