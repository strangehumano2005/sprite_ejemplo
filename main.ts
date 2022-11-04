function DETECTAR () {
    if (perro.isTouching(hueso)) {
        game.addScore(1)
        hueso.delete()
        basic.showLeds(`
            . . . . .
            # . . . .
            . # # # #
            . # . . #
            . # . . #
            `)
    } else if (perro.isTouching(obstaculo)) {
        game.addScore(-1)
        obstaculo.delete()
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    perro.change(LedSpriteProperty.X, -1)
    DETECTAR()
})
input.onButtonPressed(Button.B, function () {
    perro.change(LedSpriteProperty.X, 1)
    DETECTAR()
})
let obstaculo: game.LedSprite = null
let hueso: game.LedSprite = null
let perro: game.LedSprite = null
perro = game.createSprite(0, 2)
hueso = game.createSprite(1, 2)
hueso.set(LedSpriteProperty.Brightness, 50)
obstaculo = game.createSprite(4, 2)
obstaculo.set(LedSpriteProperty.Brightness, 150)
loops.everyInterval(200, function () {
    obstaculo.change(LedSpriteProperty.X, randint(0, 4))
    obstaculo.change(LedSpriteProperty.Y, randint(0, 4))
})
