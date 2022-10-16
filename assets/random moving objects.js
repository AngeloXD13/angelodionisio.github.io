
window.onload = function() {
    Changingtitle();
    //ChangingtitleV2;
    //animationtitles();
   
}


function animationtitles() {


    // Wrap every letter in a span
    var textWrapper = document.querySelector('.role_subtitle .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    animation = anime.timeline({loop: false})
    .add({
        targets: '.role_subtitle .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.role_subtitle .line',
        translateX: [0, document.querySelector('.role_subtitle .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.role_subtitle .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
    }).add({
        targets: '.role_subtitle',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
    //animation.reverse;

}




// Changing role title =============================
//Changingtitle(0);

var repeat = 0;

function Changingtitle() {
    
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

function ChangingtitleV2() {
    const title = new Array("Programmer", "Designer", "Technician", "Developer", "DYIer", "Experimenter", "Coder");
    var textWrapper = document.querySelector('.role_subtitle .letters');
    var repeat = 0;

    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|\.)/g, "<span class='letter'>$&</span>");
    
    anime({
        targets: '.line',
        translateX: 240,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutCirc',
        loopBegin: function(anim) {
          loopBegan++;
          //beginLogEl.value = 'loop began : ' + loopBegan;
        },
        loopComplete: function(anim) {
          loopCompleted++;
          //completeLogEl.value = 'loop completed : ' + loopCompleted;
        }
      });
}