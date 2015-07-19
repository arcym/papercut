window.React = require("react")
window.Phlux = require("phlux")
window.ShortID = require("shortid")

var Hero = require("<scripts>/classes/Hero")
var World = require("<scripts>/classes/World")
var Monster = require("<scripts>/classes/Monster")

var TiledMaps = require("<scripts>/data/TiledMaps")

window.Game = {
    "hero": null,
    "world": null,
    "monsters": {},
    "items": {},
}

Game.world = new World(TiledMaps.beta)
Game.hero = new Hero({"position": {"x": 5, "y": 151, "y": 129}})

var GameStore = Phlux.createStore({
    "data": Game
})

var HeroView = require("<scripts>/views/HeroView")
var WorldView = require("<scripts>/views/WorldView")
var ItemView = require("<scripts>/views/ItemView")
var MonsterView = require("<scripts>/views/MonsterView")
var CameraView = require("<scripts>/views/Cameraview")
var FrameView = require("<scripts>/views/FrameView")
var ForEachView = require("<scripts>/views/ForEachView")
var InterfaceView = require("<scripts>/views/InterfaceView")

var GameView = React.createClass({
    mixins: [
        Phlux.connectStore(GameStore, "game")
    ],
    render: function() {
        return (
            <FrameView aspect-ratio="15x17">
                <CameraView data={this.state.game}>
                    <WorldView data={this.state.game.world}/>
                    <HeroView data={this.state.game.hero}/>
                    <ForEachView data={this.state.game.items} view={ItemView}/>
                    <ForEachView data={this.state.game.monsters} view={MonsterView}/>
                </CameraView>
                <InterfaceView data={this.state.game.hero}/>
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
