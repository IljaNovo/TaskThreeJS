function OSAGO(number) {
    this._type = "OSAGO";
    
    this._regexpNumber = /^[aAbBcCeExX][aAbBcCeExX][aAbBcCeExX][0-9]{10}$/;
    InsuranceType.call(this, number);
}

OSAGO.prototype = Object.create(InsuranceType.prototype);
OSAGO.prototype.constructor = OSAGO;

DAGO.prototype.checkValidNumber = function(number) {
    InsuranceType.prototype.checkValidNumbe.call(this, number);
};

Object.defineProperty(OSAGO.prototype, "number", {
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

Object.defineProperty(OSAGO.prototype, "type", {
  get: function () {
    return this._type;
  },
});