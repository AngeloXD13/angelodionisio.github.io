window.onload = function () {
  particles_nasa();
  
 
};



var repeat = 0;
function Changingtitle() {
  // for documentation how to implement this function go to: https://animejs.com/
  var textWrapper = document.querySelector(".role_subtitle .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w|\.)/g,
    "<span class='letter'>$&</span>"
  );

  var animation = anime.timeline({
    loop: false,
    begin: function (anim) {},
  });

  animation
    .add({
      targets: ".role_subtitle",
      opacity: 1,
    })
    .add({
      targets: ".role_subtitle .line",
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 300,
    })
    .add({
      targets: ".role_subtitle .line",
      translateX: [
        0,
        document
          .querySelector(".role_subtitle .letters")
          .getBoundingClientRect().width + 10,
      ],
      easing: "easeOutExpo",
      duration: 500,
      delay: 50,
    })
    .add({
      targets: ".role_subtitle .letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      offset: "-=1000",
      delay: (el, i) => 20 * (i + 1),
    })
    .add({
      targets: ".role_subtitle .letter",
      opacity: [1, 0],
      easing: "easeOutExpo",
      duration: 1000,
      offset: "-=775",
      delay: (el, i) => 20 * (i + 1),
    })
    .add({
      targets: ".role_subtitle .line",
      translateX: [
        document
          .querySelector(".role_subtitle .letters")
          .getBoundingClientRect().width + 10,
        0,
      ],
      easing: "easeOutExpo",
      duration: 150,
      delay: 0,
    })
    .add({
      targets: ".role_subtitle",
      opacity: 0,
      duration: 100,
      easing: "easeInExpo",
      delay: 0,
    })
    .add({
      targets: ".role_subtitle .line",
      opacity: 0,
      changeComplete: function (anim) {
        ChangeText(repeat);
        // alert("changeComplete")
        animation.restart();
      },
      duration: 50,
    });
}

function ChangeText(n) {
  const title = new Array(
    "Programmer",
    "Designer",
    "Technician",
    "Developer",
    "DYIer",
    "Experimenter",
    "Coder"
  );
  document.getElementsByClassName("letters")[0].innerHTML = title[n];
  if (title.length <= repeat) {
    repeat = 0;
  } else {
    repeat++;
  }
  Changingtitle();
}

function particles_nasa() {
  //ID dun sa content
  particlesJS("content_jackofalltrades_particles", {
      "particles": {
        "number": {
          "value": 265,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ac5151"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "../assets/svg/planet.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 8.017060304327615,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 12.181158184520175,
            "size_min": 4.87246327380807,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 97.44926547616143,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 64.96617698410762,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  Changingtitle();
}
