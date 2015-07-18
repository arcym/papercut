window.React = require("react")
window.Phlux = require("phlux")

var Hero = require("<scripts>/classes/Hero")
var World = require("<scripts>/classes/World")
var TiledMaps = require("<scripts>/data/TiledMaps")

window.Game = {
    "hero": new Hero(),
    "world": new World(TiledMaps.alpha),
}

var GameStore = Phlux.createStore({
    "data": Game
})

var HeroView = require("<scripts>/views/HeroView")
var WorldView = require("<scripts>/views/WorldView")
var FrameView = require("<scripts>/views/FrameView")

var GameView = React.createClass({
    mixins: [
        Phlux.connectStore(GameStore, "game")
    ],
    render: function() {
        return (
            <FrameView aspect-ratio="20x15">
                <WorldView data={this.state.game.world}/>
                <HeroView data={this.state.game.hero}/>
            </FrameView>
        )
    }
})

React.render(<GameView/>, document.body)

var Input = require("<scripts>/utilities/Input")

Input.onKeyDown("W", function() {
    Game.hero.move({y: -1})
    GameStore.trigger()
})
Input.onKeyDown("S", function() {
    Game.hero.move({y: +1})
    GameStore.trigger()
})
Input.onKeyDown("A", function() {
    Game.hero.move({x: -1})
    GameStore.trigger()
})
Input.onKeyDown("D", function() {
    Game.hero.move({x: +1})
    GameStore.trigger()
})
Input.onKeyDown("Q", function() {
    Game.hero.move({x: -1, y: -1})
    GameStore.trigger()
})
Input.onKeyDown("E", function() {
    Game.hero.move({x: +1, y: -1})
    GameStore.trigger()
})
