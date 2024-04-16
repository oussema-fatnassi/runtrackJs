document.addEventListener('keydown', function (event) {
    var keylogger = document.getElementById("keylogger")
    if (event.key.match(/^[A-Za-z]$/)) 
    {
        if (document.activeElement.id === "keylogger") 
        {
            keylogger.value += event.key 
        } 
        else 
        {
            keylogger.value += event.key
        }
    }
});
