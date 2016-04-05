function Insurer(name) {
    this._name = name;
}

Object.defineProperty(Insurer.prototype, 'name', {
    get: function() {
        return this._name;
    },
    set: function(name) {
        this._name = name;
    }
});