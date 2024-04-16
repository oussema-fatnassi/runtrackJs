document.getElementById("button").addEventListener('click', function addOne(){
    var counter = document.getElementById("counter").textContent 
    counter++;
    document.getElementById("counter").textContent = counter

});
