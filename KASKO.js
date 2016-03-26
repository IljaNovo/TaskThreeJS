function KASKO(number) {
    this._type = "KASKO";
    
    this.regexpNumber = /^[0][0-4][0-9][aA][tT][-][0-2][0-9][/][0-9]{6}$/;
    InsuranceType.call(this, number);
}

KASKO.prototype = Object.create(InsuranceType.prototype);
KASKO.prototype.constructor = KASKO;

DAGO.prototype.checkValidNumber = function(number) {
    InsuranceType.prototype.checkValidNumbe.call(this, number);
};

Object.defineProperty(KASKO.prototype, "insuranceNumber", {
  get: function () {
    return this.number;
  },
  set: function (number) {
      if (this.number.test(number)) {
        this.number = number;    
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