input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    frase = randint(0, 8)
    if (frase == 0) {
        basic.showString("LOS PULPOS TIENE 3 CORAZONES")
        basic.showIcon(IconNames.Heart)
    } else if (frase == 1) {
        basic.showString("BUTTERFLIES CAN TASTE WITH THEIR FEETS")
    } else if (frase == 2) {
        basic.showString("LAS MOMIAS CHINCHORRO SON LAS MAS ANTIGUAS DEL MUNDO")
    } else if (frase == 3) {
        basic.showString("EL SANDWICH FUE INVENTADO EN 1762")
    } else if (frase == 4) {
        basic.showString("MAMIHLAPINATAPAI")
    } else if (frase == 5) {
        basic.showString("\"SI TU ME DOMESTICAS, ENTONCES TENDREMOS NECESIDAD EL UNO DEL OTRO. TU SERAS PARA MI UNICO EN EL MUNDO, YO SERE PARA TI UNICO EN EL MUNDO\" EL PRINCIPITO")
    } else if (frase == 6) {
        basic.showString("CUEXCOMATE: WORLD'S SMALLEST VOLCANO")
    } else if (frase == 7) {
        basic.showString("\"CUANDO UNO ESTA ABURRIDO, DE REPENTE SE LE OCURREN IDEAS. A MI SE ME OCURRIO HOY UNA IDEA ESTUPENDA, PERO SE ME OLVIDO. OJALA MAÑANA VUELVA\" PAPELUCHO ")
    } else if (frase == 8) {
        basic.showString("THERE ARE 24 SPECIES OF DANCING FROGS")
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    input.calibrateCompass()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showArrow(ArrowNames.South)
})
let frase = 0
frase = 0
let caritas = 0
basic.showString("OLITA DE MAR")
basic.clearScreen()
basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . # .
            . . # # #
            . # # . .
            # # # # .
            # # # # #
            `)
    }
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . . .
        # # # . .
        # # # # #
        `)
    basic.showLeds(`
        . . . # .
        . . # # #
        . # # . .
        # # # # .
        # # # # #
        `)
})
