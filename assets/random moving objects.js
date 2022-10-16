
window.onload = function() {
    setTimeout(Changingtitle(), 1000);
   
}

// Changing role title =============================
Changingtitle(0);
function Changingtitle(i) {
    const title = new Array("Programmer", "Designer", "Technician", "Developer", "DYIer", "Experimenter", "Coder");
    if (title.length > i) {
        setTimeout(function() {
            document.getElementById("role_subtitle").innerHTML = title[i];
            Changingtitle(++i);
        }, 1000); // 1 second (in milliseconds)

    } else if (title.length == i) { // Loop
        Changingtitle(0);
    }

}