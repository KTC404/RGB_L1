function doSomething3 () {
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 10000), music.PlaybackMode.UntilDone)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        strip.setBrightness(255)
        doSomething()
    }
    basic.showIcon(IconNames.Happy)
})
function doSomething () {
    doSomething3()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(10)
    doSomething3()
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(10)
    doSomething3()
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    basic.pause(10)
    doSomething3()
    strip.setBrightness(0)
    basic.pause(10)
}
input.onButtonPressed(Button.AB, function () {
    strip.setBrightness(0)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        strip.setBrightness(10)
        doSomething()
    }
    basic.showIcon(IconNames.Sad)
})
function doSomething2 () {
    for (let index = 0; index < 1; index++) {
        strip.setBrightness(5)
        strip.showRainbow(1, 360)
        basic.pause(200)
        strip.setBrightness(10)
        strip.showRainbow(1, 360)
        basic.pause(200)
        strip.setBrightness(50)
        strip.showRainbow(1, 360)
        basic.pause(200)
        strip.setBrightness(100)
        strip.showRainbow(1, 360)
    }
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 6, NeoPixelMode.RGB)
strip.setBrightness(20)
music.setVolume(255)
for (let index = 0; index <= 5; index++) {
    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
    music.play(music.stringPlayable("E B C5 A B G A F ", 5000), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    strip.show()
    basic.pause(100)
}
music.play(music.stringPlayable("E B C5 A B G A F ", 5000), music.PlaybackMode.UntilDone)
strip.setBrightness(0)
basic.pause(500)
basic.clearScreen()
doSomething2()
for (let index = 0; index <= 5; index++) {
    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
    music.play(music.stringPlayable("C5 A B G A F G E ", 5000), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        `)
    strip.show()
    basic.pause(100)
}
music.play(music.stringPlayable("C5 A B G A F G E ", 5000), music.PlaybackMode.UntilDone)
strip.setBrightness(50)
strip.showColor(neopixel.colors(NeoPixelColors.White))
basic.pause(1000)
music.play(music.stringPlayable("E E E E E E E E ", 5000), music.PlaybackMode.UntilDone)
basic.clearScreen()
basic.forever(function () {
    basic.pause(200)
    for (let index = 0; index <= 5; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(50)
    }
})
