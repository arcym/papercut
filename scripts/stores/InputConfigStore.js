var InputConfigStore = Reflux.createStore({
    data: {
        keyboard: {
            38: "north",
            40: "south",
            37: "west",
            39: "east",
            87: "north",
            83: "south",
            65: "west",
            68: "east",
            81: "northwest",
            69: "northeast",
        }
    },
    getData: function() {
        return this.data
    },
    parseKeyboardInput: function(keycode) {
        return this.data.keyboard[keycode]
    }
})

module.exports = InputConfigStore
