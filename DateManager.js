var dateManager = (function() {
    
    function setInStorage(insurance) {
        localStorage.setItem(insurance.number, JSON.stringify({
            number : insurance.number,
            insurer : insurance.insurer,
            type : insurance.type,
            discount : insurance.discount,
            premium : insurance.premium,
            saleDate : insurance.saleDate
        }))
    }
    
    function getDateStorage(insuranceNumber) {
        return JSON.parse(localStorage.getItem(insuranceNumber));
    }
    
    return {
        getDateStorage : getDateStorage,
        setInStorage : setInStorage
})