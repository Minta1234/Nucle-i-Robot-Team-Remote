radio.setGroup(55)

let lastCmd = "S"    // คำสั่งล่าสุด (ป้องกัน spam)

basic.forever(function () {

    let x = pins.analogReadPin(AnalogPin.P1)
    let y = pins.analogReadPin(AnalogPin.P2)

    // DEADZONE (ค่าตรงกลาง)
    let centerMin = 450
    let centerMax = 600

    let cmd = "S"

    if (y > 700) cmd = "F"
    else if (y < 300) cmd = "B"
    else if (x > 700) cmd = "R"
    else if (x < 300) cmd = "L"
    else cmd = "S"               // อยู่ใน deadzone → หยุด

    // ส่งเฉพาะ “เมื่อคำสั่งเปลี่ยน”
    if (cmd != lastCmd) {
        radio.sendString(cmd)
        lastCmd = cmd
    }

    basic.pause(40)
})


// =============== BUTTONS (SAFE MODE) ===============

// P8 = Lift Up
control.onEvent(DigitalPin.P8, DAL.MICROBIT_PIN_EVT_RISE, function () {
    radio.sendString("UP")
})

// P12 = Lift Down
control.onEvent(DigitalPin.P12, DAL.MICROBIT_PIN_EVT_RISE, function () {
    radio.sendString("DOWN")
})

// P13 = Claw Open
control.onEvent(DigitalPin.P13, DAL.MICROBIT_PIN_EVT_RISE, function () {
    radio.sendString("OPEN")
})

// P14 = Claw Close
control.onEvent(DigitalPin.P14, DAL.MICROBIT_PIN_EVT_RISE, function () {
    radio.sendString("CLOSE")
})
