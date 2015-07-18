var Item = function(protoitem) {
    var item = this
    for(var key in protoitem) {
        item[key] = protoitem[key]
    }
}

module.exports = Item
