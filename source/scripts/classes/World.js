var Item = require("<scripts>/classes/Item")
var Monster = require("<scripts>/classes/Monster")

var World = function(tiledmap) {
    this.width = tiledmap.width
    this.height = tiledmap.height
    
    this.tiles = new Object()
    for(var x = 0; x < this.width; x++) {
        for(var y = 0; y < this.height; y++) {
            var tile = tiledmap.layers[0].tiles[x + "x" + y]
            this.tiles[x + "x" + y] = {
                "position": {"x": x, "y": y},
                "color": tile.properties.color,
                "saves": !!tile.properties.saves,
                "blocks": !!tile.properties.blocks,
                "kills": !!tile.properties.kills,
            }
            if(!!tile.properties.item) {
                Game.items[x + "x" + y] = new Item({
                    "type": tile.properties.item,
                    "position": {"x": x, "y": y},
                })
            }
            if(!!tile.properties.monster) {
                var key = ShortID.generate()
                Game.monsters[key] = new Monster({
                    "type": tile.properties.monster,
                    "direction": parseInt(tile.properties.direction),
                    "position": {"x": x, "y": y},
                    "key": key
                })
            }
        }
    }
}

World.prototype.getTile = function(position) {
    var x = position.x % this.width
    var y = position.y % this.height
    return this.tiles[x + "x" + y] || {}
}

module.exports = World
