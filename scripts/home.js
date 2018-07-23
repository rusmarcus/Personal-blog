window.onload = function() {
    var continueBtn = document.getElementById("accept");
    let toRemove = document.getElementById("toRemove");
    continueBtn.addEventListener("click", removal);

    function removal() {
        
        toRemove.style.visibility = "hidden"
    }
}
