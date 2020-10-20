input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    frase = randint(0, 9)
    if (frase == 0) {
        basic.showString("LOS PULPOS TIENEN 3 CORAZONES")
        basic.showIcon(IconNames.Heart)
        basic.pause(2000)
    } else if (frase == 1) {
        basic.showString("BUTTERFLIES CAN TASTE WITH THEIR FEET")
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
        basic.showString("\"CUANDO UNO ESTA ABURRIDO, DE REPENTE SE LE OCURREN IDEAS. A MI SE ME OCURRIO HOY UNA IDEA ESTUPENDA, PERO SE ME OLVIDO. OJALA MANANA VUELVA\" PAPELUCHO ")
    } else if (frase == 8) {
        basic.showString("THERE ARE 24 SPECIES OF DANCING FROGS")
    } else if (frase == 9) {
        basic.showString("TRAMPOSO")
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(5000)
    }
    basic.clearScreen()
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    input.calibrateCompass()
})
input.onButtonPressed(Button.B, function () {
    brujula = input.compassHeading()
    basic.clearScreen()
    basic.showString("EL SUR ESTA")
    basic.clearScreen()
    basic.showNumber(brujula)
    basic.pause(100)
    if (input.compassHeading() > 158 && input.compassHeading() < 203) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(5000)
    } else if (input.compassHeading() > 68 && input.compassHeading() < 113) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(5000)
    } else if (input.compassHeading() > 248 && input.compassHeading() < 293) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(5000)
    } else if (input.compassHeading() > 113 && input.compassHeading() < 158) {
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
        basic.pause(5000)
    } else if (input.compassHeading() > 203 && input.compassHeading() < 248) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
        basic.pause(5000)
    } else if (input.compassHeading() > 293 && input.compassHeading() < 338) {
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
        basic.pause(5000)
    } else if (input.compassHeading() > 23 && input.compassHeading() < 68) {
        basic.showLeds(`
            # . . . .
            . # . . #
            . . # . #
            . . . # #
            . # # # #
            `)
        basic.pause(5000)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(5000)
    }
    basic.pause(5000)
})
let brujula = 0
let frase = 0
frase = 0
let caritas = 0
basic.showString("OLITA DE MAR")
basic.clearScreen()
basic.forever(function () {
    brujula = input.compassHeading()
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        # . . . .
        # # . . .
        . . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        # . . . .
        # # . . .
        # # # # #
        `)
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
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # .
        . # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        # # # # #
        `)
})
