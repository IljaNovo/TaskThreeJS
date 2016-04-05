function InsuranceType(number) {
    if (this._type === undefined) {
        this._type = undefined;    
    }
    if (this._regexpNumber === undefined) {
       this._regexpNumber = /[0-9][0-9][0-9]/;
    }
    if(this._regexpNumber.test(number)) {
        this._number = number;    
    } else {
        throw "ErrorSetInsuranceNumber";
    }
}

InsuranceType.prototype.checkValidNumber = function(number) {
    if (this._regexpNumber.test(number)) {
        return true;
    } else {
        return false;
    }
};

Object.defineProperty(InsuranceType.prototype, "number", {
  get: function () {
    return this._number;
  },
  set: function (number) {
    if (this._regexpNumber.test(number)) {
        this._number = number;    
    } else {
        throw "ErrorSetInsuranceNumber";
    }
  }
});

Object.defineProperty(InsuranceType.prototype, "type", {
  get: function () {
    return this._type;
  },
});