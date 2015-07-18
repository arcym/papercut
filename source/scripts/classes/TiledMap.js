var TiledMap = function(protomap) {
    var map = this
    
    if(protomap.version != "1") {
        throw "Unsupported Version"
    } if(protomap.orientation != "orthogonal") {
        throw "Unsupported Orientation"
    } if(protomap.renderorder != "right-down") {
        throw "Unsupported RenderOrder"
    }
    
    var Tile = function(prototile) {
        var tile = this
        
        tile.image = prototile.image
        tile.position = prototile.position
        
        if(!!prototile.properties
        && Object.keys(prototile.properties).length > 0) {
            tile.properties = new Object()
            for(var key in prototile.properties) {
                var value = prototile.properties[key]
                tile.properties[key] = value
            }
        }
    }
    
    var Tileset = function(prototileset) {
        var tileset = this
        
        tileset.name = prototileset.name
        
        if(prototileset.properties != undefined
        && Object.keys(prototileset.properties).length > 0) {
            tileset.properties = new Object()
            for(var key in prototileset.properties) {
                tileset.properties[key] = prototileset.properties[key]
            }
        }
        
        var tilewidth = prototileset.tilewidth
        var tileheight = prototileset.tileheight
        var imagewidth = prototileset.imagewidth
        var imageheight = prototileset.imageheight
        var imagemargin = prototileset.imagemargin || 0
        var imagespacing = prototileset.imagespacing || 0
        var tileproperties = prototileset.tileproperties || {}
        
        tileset.width = (imagewidth - imagemargin + imagespacing) / (tilewidth + imagespacing)
        tileset.height = (imageheight - imagemargin + imagespacing) / (tileheight + imagespacing)
        tileset.tilewidth = tilewidth
        tileset.tileheight = tileheight
        
        tileset.firstgid = prototileset.firstgid
        tileset.lastgid = tileset.firstgid + (tileset.width * tileset.height)
        
        tileset.tiles = new Object()
        for(var gid = tileset.firstgid; gid < tileset.lastgid; gid++) {
            map.tiles[gid] = tileset.tiles[gid] = new Tile({
                "image": {"width": tilewidth, "height": tileheight},
                "properties": tileproperties[gid - 1],
                "gid": gid
            })
        }
    }
    
    var Layer = function(protolayer) {
        var layer = this
        
        layer.name = protolayer.name
        
        if(protolayer.properties != undefined
        && Object.keys(protolayer.properties).length > 0) {
            layer.properties = new Object()
            for(var key in protolayer.properties) {
                layer.properties[key] = protolayer.properties[key]
            }
        }
        
        layer.opacity = protolayer.opacity
        layer.visible = protolayer.visible
        
        layer.tiles = new Object()
        for(var x = 0; x < protolayer.width; x++) {
            for(var y = 0; y < protolayer.height; y++) {
                var gid = protolayer.data[y * protolayer.width + x]
                layer.tiles[x + "x" + y] = map.tiles[gid]
            }
        }
    }
    
    map.width = protomap.width
    map.height = protomap.height
    map.tilewidth = protomap.tilewidth
    map.tileheight = protomap.tileheight
    
    if(protomap.backgroundcolor != undefined) {
        map.color = protomap.backgroundcolor
    }
    
    if(protomap.properties != undefined
    && Object.keys(protomap.properties).length > 0) {
        map.properties = new Object()
        for(var key in protomap.properties) {
            var value = protomap.properties[key]
            map.properties[key] = value
        }
    }
    
    map.tiles = new Object()
    map.layers = new Object()
    map.tilesets = new Object()
    
    for(var index in protomap.tilesets) {
        var prototileset = protomap.tilesets[index]
        map.tilesets[index] = new Tileset(prototileset)
    }
    
    for(var index in protomap.layers) {
        var protolayer = protomap.layers[index]
        map.layers[index] = new Layer(protolayer)
    }
}

// the following features
// are not supported yet:
// - map
//   - renderorder [!!]
//   - non-json formats
// - objectgroup
// - imagelayer
// - tileset
//   - images [!!]
//   - terraintypes
// - layer
//   - data
//     - encoding

module.exports = TiledMap
