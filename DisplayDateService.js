var displayDateService = (function() {
    
    function showDate() {
        var displayTag = document.getElementById("right");
        
        
        
        displayTag.innerHTML += "<br />Какой хороший день!";
    }
    return {
        showDate : showDate
    };
    
})();