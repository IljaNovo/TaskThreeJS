var displayDateService = (function() {
    
    function showDate(number) {
        var displayTag = document.querySelector("#storageDate");
        
        displayTag.innerHTML += "<br /Какой хороший день!>";
    }
    return {
        show : show
    };
    
})();