var InputConfigStore = Reflux.createStore({
    data: {
        keyboard: {
            38: "up",
            40: "down",
            37: "left",
            39: "right"
        }
    },
    getData: function() {
        return this.data
    }
})

module.exports = InputConfigStore
