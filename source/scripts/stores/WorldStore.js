var PlayerActions = require("<root>/scripts/actions/PlayerActions")

var WorldStore = Reflux.createStore({
    data: {
        width: 20,
        height: 15,
        tiles: {}
    },
    getData: function() {
        return this.data
    },
    getTile: function(x, y) {
        if(x >= 0 || x <= this.data.width
        || y >= 0 || y <= this.data.height) {
            var index = x + "x" + y
            if(this.data.tiles[index]) {
                return this.data.tiles[index]
            } else {
                return {
                    passable: true
                }
            }
        } else {
            throw x + " and " + y + " are out of bounds."
        }
    },
    getWidth: function() {
        return this.data.width
    },
    getHeight: function() {
        return this.data.height
    },
    init: function() {
        var world = require("<root>/assets/FirstWorld.json")
        this.data.width = world.width
        this.data.height = world.height
        for(var index in world.layers[0].data) {
            var tile = {
                x: index % world.width,
                y: Math.floor(index / world.width),
                type: world.layers[0].data[index],
                passable: world.layers[0].data[index] != 1,
                image: world.layers[0].data[index] == 2 ? 1 : Math.floor(Math.random() * 17) + 2
            }
            
            if(!tile.passable) {
                this.data.tiles[tile.x + "x" + tile.y] = tile
            }
        }
    }
})

module.exports = WorldStore
