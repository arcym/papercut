var WorldStore = Reflux.createStore({
    data: {
        width: 20,
        height: 15,
        tiles: [
            {
                x: 0,
                y: 14
            },
            {
                x: 1,
                y: 14
            },
            {
                x: 2,
                y: 14
            }
        ]
    },
    init: function() {
    },
    getData: function() {
        return this.data
    }
})

module.exports = WorldStore
