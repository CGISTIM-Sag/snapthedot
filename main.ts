function Commencer () {
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(500)
    basic.showString("CenterIt")
    music.setVolume(50)
    music.playMelody("E B C5 A B G A F ", 240)
    music.playMelody("E B C5 A B G A F ", 240)
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.SmallSquare)
        basic.clearScreen()
        basic.pause(200)
    }
    game.setLife(3)
    game.setScore(0)
    Sprite = game.createSprite(2, 2)
    Speed = 1000
    for (let index = 0; index <= 2; index++) {
        basic.showString("" + (3 - index))
        basic.pause(200)
    }
}
input.onButtonPressed(Button.A, function () {
    if (Sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        music.playTone(415, music.beat(BeatFraction.Quarter))
        Speed += -50
    } else {
        game.removeLife(1)
        music.playTone(131, music.beat(BeatFraction.Half))
    }
})
input.onButtonPressed(Button.B, function () {
    if (game.isPaused()) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
        game.resume()
    } else {
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        game.pause()
    }
})
let Speed = 0
let Sprite: game.LedSprite = null
Commencer()
basic.forever(function () {
    Sprite.move(1)
    basic.pause(Speed)
    Sprite.ifOnEdgeBounce()
})
