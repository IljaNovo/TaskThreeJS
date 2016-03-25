function InsuranceType(number) {
      
    if (this.regexpNumber === undefined) {
       this.regexpNumber = /[0-9][0-9][0-9]/;
    }
    if(this.regexpNumber.test(number)) {
        this.number = number;    
    } else {
        throw "ErrorSetInsuranceNumber";
    }
}

InsuranceType.prototype.checkValidNumber = function(number) {
    if (this.regexpNumber.test(number)) {
        return true;
    } else {
        return false;
    }
};

Object.defineProperty(InsuranceType.prototype, "insuranceNumber", {
  get: function () {
    return this.number;
  },
  set: function (number) {
    if (this.regexpNumber.test(number)) {
        this.number = number;    
    } else {
        throw "ErrorSetInsuranceNumber";
    }
  }
});