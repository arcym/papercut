var TiledMap = require("<scripts>/classes/TiledMap")

var TiledMaps = {
    "alpha": new TiledMap(require("<scripts>/data/AlphaWorld")),
    "beta": new TiledMap(require("<scripts>/data/BetaWorld"))
}

module.exports = TiledMaps
