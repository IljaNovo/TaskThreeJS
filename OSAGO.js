function OSAGO(number) {
    this.regexpNumber = /^[aAbBcCeExX][aAbBcCeExX][aAbBcCeExX][0-9]{10}$/;
    InsuranceType.call(this, number);
}

OSAGO.prototype = Object.create(InsuranceType.prototype);
OSAGO.prototype.constructor = OSAGO;

DAGO.prototype.checkValidNumber = function(number) {
    InsuranceType.prototype.checkValidNumbe.call(this, number);
};

Object.defineProperty(OSAGO.prototype, "insuranceNumber", {
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