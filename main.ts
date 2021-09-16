basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P1)) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showNumber(1)
    } else {
        music.rest(music.beat(BeatFraction.Whole))
        basic.showNumber(0)
    }
})
