
window.onload = function() {
    Changingtitle();
}

var repeat = 0;
function Changingtitle() {

    // for documentation how to implement this function go to: https://animejs.com/
    var textWrapper = document.querySelector('.role_subtitle .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|\.)/g, "<span class='letter'>$&</span>");
    
    var animation = anime.timeline({
        loop: false,
        begin: function(anim) {
        },
    });

    animation
    .add({
        targets: '.role_subtitle',
        opacity: 1,
    })
    .add({
        targets: '.role_subtitle .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 300,
    })
    .add({
        targets: '.role_subtitle .line',
        translateX: [0, document.querySelector('.role_subtitle .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 500,
        delay: 50
    })
    .add({
        targets: '.role_subtitle .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1000,
        offset: '-=1000',
        delay: (el, i) => 20 * (i+1)
    })
    .add({
        targets: '.role_subtitle .letter',
        opacity: [1,0],
        easing: "easeOutExpo",
        duration: 1000,
        offset: '-=775',
        delay: (el, i) => 20 * (i+1), 
    })
    .add({
        targets: '.role_subtitle .line',
        translateX: [document.querySelector('.role_subtitle .letters').getBoundingClientRect().width + 10, 0],
        easing: "easeOutExpo",
        duration: 150,
        delay: 0
    })
    .add({
        targets: '.role_subtitle',
        opacity: 0,
        duration: 100,
        easing: "easeInExpo",
        delay: 0
    })
    .add({
        targets: '.role_subtitle .line',
        opacity: 0,
        changeComplete: function(anim) {
           
            ChangeText(repeat);
           // alert("changeComplete")
           animation.restart();
        },
        duration: 50
    });
}

function ChangeText(n){
    const title = new Array("Programmer", "Designer", "Technician", "Developer", "DYIer", "Experimenter", "Coder");
    document.getElementsByClassName("letters")[0].innerHTML = title[n];
    if (title.length <= repeat){
        repeat = 0;
    }
    else{
        repeat++;
    }
    Changingtitle();

}