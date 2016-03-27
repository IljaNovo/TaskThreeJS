function DAGO(number) {
    this._type = "DAGO";
    
    this._regexpNumber = /^[0][0-4][0-9][gG][oO][-][0-2][0-9][/][0-9]{5}$/;
    InsuranceType.call(this, number);
}

DAGO.prototype = Object.create(InsuranceType.prototype);
DAGO.prototype.constructor = DAGO;

DAGO.prototype.checkValidNumber = function(number) {
    InsuranceType.prototype.checkValidNumbe.call(this, number);
};

Object.defineProperty(DAGO.prototype, "number", {
  get: function () {
    return this._number;
  },
  set: function (number) {
      if (this._number.test(number)) {
        this._number = number;    
    } else {
        throw "ErrorSetInsuranceNumber";
    }
  }
});

Object.defineProperty(DAGO.prototype, "type", {
  get: function () {
    return this._type;
  },
});