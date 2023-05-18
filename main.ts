function Commencer () {
    game.setLife(3)
    game.setScore(0)
    Sprite = game.createSprite(2, 2)
    Speed = 1000
}
input.onButtonPressed(Button.A, function () {
    if (Sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        Speed += -50
    } else {
        game.removeLife(1)
    }
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
let Speed = 0
let Sprite: game.LedSprite = null
Commencer()
basic.forever(function () {
    Sprite.move(1)
    basic.pause(Speed)
    Sprite.ifOnEdgeBounce()
})
