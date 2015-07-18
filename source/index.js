window.React = require("react")
window.Phlux = require("phlux")

var Hero = require("<scripts>/classes/Hero")
var World = require("<scripts>/classes/World")
var Monster = require("<scripts>/classes/Monster")
var TiledMaps = require("<scripts>/data/TiledMaps")

window.Game = {
    "hero": new Hero(),
    "world": new World(TiledMaps.alpha),
    "monsters": {
        "john": new Monster({
            "position": {
                "x": 10,
                "y": 4
            },
            "movement": {
                "x": -1,
                "y": 0
            }
        }),
    }
}

var GameStore = Phlux.createStore({
    "data": Game
})

var HeroView = require("<scripts>/views/HeroView")
var WorldView = require("<scripts>/views/WorldView")
var MonsterView = require("<scripts>/views/MonsterView")
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
                {this.renderMonsters()}
            </FrameView>
        )
    },
    renderMonsters: function() {
        var renderings = []
        for(var key in this.state.game.monsters) {
            var data = this.state.game.monsters[key]
            renderings.push(
                <MonsterView key={key} data={data}/>
            )
        }
        return renderings
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
