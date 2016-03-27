var dateManager = (function() {
    
    function setDate() {
        var itemInsurer = new Insurer(document.getElementById("insured").value);
        var itemSaleDate = document.getElementById("saleDate").value;
        var itemPremium = document.getElementById("insurancePremium").value;
        var itemDiscount = document.getElementById("discount").value;
        var itemInsurenceType;
        
        switch(document.getElementById("typeInsur").value) {
            case "OSAGO":
                itemInsurenceType = new OSAGO(document.getElementById("policyNumber").value);
                break;
            case "KASKO":
                itemInsurenceType = new KASKO(document.getElementById("policyNumber").value);
                break;
            case "DAGO":
                itemInsurenceType = new DAGO(document.getElementById("policyNumber").value);
                break;    
        }
        
        var newInsur = new Insurance(itemInsurenceType, itemInsurer, itemSaleDate, itemDiscount, itemPremium);
        
        setInStorage(newInsur);
    }
    
    function setInStorage(insurance) {
        localStorage.setItem(insurance.number, JSON.stringify({
            number : insurance.number,
            insurer : insurance.insurer.name,
            type : insurance.type,
            discount : insurance.discount,
            premium : insurance.premium,
            saleDate : insurance.saleDate
        }));
    } 
    
    function getDateStorage(insuranceNumber) {
        return JSON.parse(localStorage.getItem(insuranceNumber));
    }
    
    function deleteAllDate() {
        if (localStorage.length !== 0) {
            localStorage.clear();
        }
        else {
            throw "Items not found";
        }
    }

    function deleteDate() {
        if (localStorage.length !== 0) {
            localStorage.removeItem(localStorage.key(0));
        }
        else {
            throw "Items not found";
        }
    }
    
    return {
        getDateStorage : getDateStorage,
        setDate : setDate,
        deleteAllDate : deleteAllDate,
        deleteDate : deleteDate
    }
})();