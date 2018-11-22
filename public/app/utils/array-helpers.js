if (!Array.prototype.$flatMap) {
    Array.prototype.$flatMap = function(cb) {
        return this.reduce((arrDestino, arr) => arrDestino.concat(cb(arr)), []);
    }
}