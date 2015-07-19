var Message = function(protomessage) {
    var message = this
    for(var key in protomessage) {
        message[key] = protomessage[key]
    }
}

module.exports = Message
