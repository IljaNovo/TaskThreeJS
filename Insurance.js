function Insurance(insurerType, insurer, saleDate, discount, premium) {
    this._insurerType = insurerType;
    this._insurer = insurer;
    this._saleDate = saleDate;
    this._discount = discount;
    this._premium = premium;
}

Object.defineProperty(Insurance.prototype, 'number', {
    get : function() {
        return this._insurerType.number;
    },
    set: function(number) {
        this._insurerType.number = number; 
    }
});

Object.defineProperty(Insurance.prototype, 'insurer', {
    get : function() {
        return this._insurer;
    },
    set: function(insurer) {
        this._insurer = insurer;
    }
});

Object.defineProperty(Insurance.prototype, 'type', {
    get : function() {
        return this._insurerType.type;
    },
    set: function(type) {
        this._type = type;
    }
});

Object.defineProperty(Insurance.prototype, 'discount', {
    get : function() {
        return this._discount;
    },
    set: function(discount) {
        this._discount = discount;
    }
});

Object.defineProperty(Insurance.prototype, 'premium', {
    get : function() {
        return this._premium;
    },
    set : function(premium) {
        this._premium = premium;
    }
})

Object.defineProperty(Insurance.prototype, 'saleDate', {
    get : function() {
        return this._saleDate;
    },
    set : function(saleDate) {
        this._saleDate = saleDate;
    }
});