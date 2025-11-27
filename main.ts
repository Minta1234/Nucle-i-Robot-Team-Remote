control.onEvent(DigitalPin.P14, EventBusValue.MICROBIT_EVT_ANY, function () {
    radio.sendString("CLOSE")
    basic.showIcon(IconNames.SmallSquare)
})
control.onEvent(DigitalPin.P13, EventBusValue.MICROBIT_EVT_ANY, function () {
    radio.sendString("OPEN")
    basic.showIcon(IconNames.Square)
})
control.onEvent(DigitalPin.P12, EventBusValue.MICROBIT_EVT_ANY, function () {
    radio.sendString("DOWN")
    basic.showIcon(IconNames.Tortoise)
})
control.onEvent(DigitalPin.P8, EventBusValue.MICROBIT_EVT_ANY, function () {
    radio.sendString("UP")
    basic.showIcon(IconNames.Butterfly)
})
let y = 0
let x = 0
radio.setGroup(67)
basic.showString("Nucle-i")
basic.forever(function () {
    x = pins.analogReadPin(AnalogPin.P1)
    y = pins.analogReadPin(AnalogPin.P2)
    if (y > 700) {
        radio.sendString("F")
        basic.showIcon(IconNames.Heart)
    } else if (y < 300) {
        radio.sendString("B")
        basic.showIcon(IconNames.SmallHeart)
    } else if (x > 700) {
        radio.sendString("R")
        basic.showIcon(IconNames.Sad)
    } else if (x < 300) {
        radio.sendString("L")
        basic.showIcon(IconNames.Happy)
    } else {
        radio.sendString("S")
        basic.showIcon(IconNames.Confused)
    }
    basic.pause(40)
})
