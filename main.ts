radio.onReceivedString(function (receivedString) {
    if (receivedString == "grumpy") {
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -48) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -55) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -62) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
})
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
