var World = function(tiledmap) {
    this.width = tiledmap.width
    this.height = tiledmap.height
    
    this.tiles = new Object()
    for(var x = 0; x < this.width; x++) {
        for(var y = 0; y < this.height; y++) {
            var tile = tiledmap.layers[0].tiles[x + "x" + y]
            this.tiles[x + "x" + y] = {
                position: {"x": x, "y": y},
                color: tile.properties.color,
                saves: !!tile.properties.saves,
                blocks: !!tile.properties.blocks,
                kills: !!tile.properties.kills,
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
