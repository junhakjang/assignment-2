input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    if (Switch == 0) {
        Number_1 += 1
        basic.showString("" + (Number_1))
    }
    if (Switch == 1) {
        Number_2 += 1
        basic.showString("" + (Number_2))
    }
})
input.onButtonPressed(Button.AB, function () {
    Switch += 1
    if (Switch == 1) {
        basic.clearScreen()
        basic.showString("" + (Number_1))
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        Number_1 = Number_1
        basic.clearScreen()
    }
    if (Number_2 != 0) {
        Number_2 = Number_2
        basic.showString("" + (Number_1 + Number_2))
    }
})
input.onButtonPressed(Button.B, function () {
    if (Switch == 0) {
        Number_1 += -1
        basic.showString("" + (Number_1))
    }
    if (Switch == 1) {
        Number_2 += -1
        basic.showString("" + (Number_2))
    }
})
input.onGesture(Gesture.Shake, function () {
    Switch += 1
    if (Switch == 1) {
        basic.clearScreen()
        basic.showString("" + (Number_1))
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        Number_1 = Number_1
        basic.clearScreen()
    }
    if (Number_2 != 0) {
        Number_2 = Number_2
        basic.showString("" + (Number_1 - Number_2))
    }
})
let Switch = 0
let Number_2 = 0
let Number_1 = 0
Number_1 = 0
Number_2 = 0
Switch = 0
basic.forever(function () {
	
})
