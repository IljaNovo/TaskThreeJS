function KASKO(number) {
    this._type = "KASKO";
    
    this._regexpNumber = /^[0][0-4][0-9][aA][tT][-][0-2][0-9][/][0-9]{6}$/;
    InsuranceType.call(this, number);
}

KASKO.prototype = Object.create(InsuranceType.prototype);
KASKO.prototype.constructor = KASKO;

DAGO.prototype.checkValidNumber = function(number) {
    InsuranceType.prototype.checkValidNumbe.call(this, number);
};

Object.defineProperty(KASKO.prototype, "number", {
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

Object.defineProperty(KASKO.prototype, "type", {
  get: function () {
    return this._type;
  },
});