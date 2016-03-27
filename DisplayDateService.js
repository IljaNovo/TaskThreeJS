var displayDateService = (function() {
    
    function showDate() {
        var displayTag = document.getElementById("storageDate");
        
        displayTag.innerHTML = "";
        
        var currentItem;
        
        for (var i = 0; i < localStorage.length; ++i) {
            currentItem = dateManager.getDateStorage(localStorage.key(i));
            
            displayTag.innerHTML += "<br />" + 
                "Вид страховки: " + currentItem.type + "<br />" +
                "Номер полиса: " + currentItem.number + "<br />" +
                "Страхователь: " + currentItem.insurer + "<br />" +
                "Дата продажи: " + currentItem.saleDate + "<br />" +
                "Страховая премия: " + currentItem.premium + "<br />" +
                "Скидка: " + currentItem.discount + "<br />";
        }
    }
    return {
        showDate : showDate
    };
    
})();