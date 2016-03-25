function DAGO(number) {
    this.regexpNumber = /^[0][0-4][0-9][gG][oO][-][0-2][0-9][/][0-9]{5}$/;
    InsuranceType.call(this, number);
}

DAGO.prototype = Object.create(InsuranceType.prototype);
DAGO.prototype.constructor = DAGO;

DAGO.prototype.checkValidNumber = function(number) {
    InsuranceType.prototype.checkValidNumbe.call(this, number);
};

Object.defineProperty(DAGO.prototype, "insuranceNumber", {
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