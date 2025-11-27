control.onEvent(DigitalPin.P14, EventBusValue.MICROBIT_EVT_ANY, function () {
    radio.sendString("CLOSE")
})
control.onEvent(DigitalPin.P13, EventBusValue.MICROBIT_EVT_ANY, function () {
    radio.sendString("OPEN")
})
control.onEvent(DigitalPin.P12, EventBusValue.MICROBIT_EVT_ANY, function () {
    radio.sendString("DOWN")
})
control.onEvent(DigitalPin.P8, EventBusValue.MICROBIT_EVT_ANY, function () {
    radio.sendString("UP")
})
let y = 0
let x = 0
radio.setGroup(55)
basic.showString("Nucle-i")
basic.forever(function () {
    x = pins.analogReadPin(AnalogPin.P1)
    y = pins.analogReadPin(AnalogPin.P2)
    if (y > 700) {
        radio.sendString("F")
    } else if (y < 300) {
        radio.sendString("B")
    } else if (x > 700) {
        radio.sendString("R")
    } else if (x < 300) {
        radio.sendString("L")
    } else {
        radio.sendString("S")
    }
    basic.pause(40)
})
