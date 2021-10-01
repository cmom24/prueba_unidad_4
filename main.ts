let Cantidad_Agua = 0
let Dias_menos_2mm = 0
let Agua_Diaria = 0
let Promedio = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Cantidad_Agua = 0
        Dias_menos_2mm = 0
        for (let index = 0; index < 1825; index++) {
            Agua_Diaria = randint(0, 6)
            Cantidad_Agua += Agua_Diaria
            if (Agua_Diaria <= 2) {
                Dias_menos_2mm += 1
            }
        }
        basic.showString("C:")
        basic.showNumber(Cantidad_Agua)
        basic.showString("P:")
        Promedio = Cantidad_Agua / 1825
        basic.showString("" + (Promedio))
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("Menos 2mm:")
        basic.showNumber(Dias_menos_2mm)
    }
})
