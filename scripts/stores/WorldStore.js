var PlayerActions = require("<root>/scripts/actions/PlayerActions")

var WorldStore = Reflux.createStore({
    data: {
        width: 20,
        height: 15,
        tiles: []
    },
    getData: function() {
        return this.data
    },
    getTile: function(x, y) {
        var index = x + (this.data.width * y)
        if(index < this.data.tiles.length) {
            return this.data.tiles[index]
        } else {
            throw x + " and " + y + " are not valid"
        }
    },
    init: function() {
        var world = require("<root>/assets/FirstWorld.json")
        this.data.width = world.width
        this.data.height = world.height
        for(var index in world.layers[0].data) {
            this.data.tiles.push({
                x: index % world.width,
                y: Math.floor(index / world.width),
                type: world.layers[0].data[index],
                passable: world.layers[0].data[index] != 1
            })
        }
    }
})

module.exports = WorldStore
