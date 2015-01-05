var GameFrameStore = Reflux.createStore({
    data: {
        width: 20,
        height: 15
    },
    getData: function() {
        return this.data
    },
    getWidth: function() {
        return this.data.width
    },
    getHeight: function() {
        return this.data.height
    }
})

module.exports = GameFrameStore
