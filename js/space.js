let goBtn = $("#goBtn");
let distanceText = $("#distanceText");

let g_STATE = {
    loadingPlace: false
};

const c_PARTICLES_WHITE_GRAB_SLOW_IMG = {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#c9c8c5"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/single_star2.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 250,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 0.5
      },
      "move": {
        "enable": true,
        "speed": 1.1,
        "direction": "top",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 710.2328774690454,
          "rotateY": 0
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 527.4725274725275,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 584.6623574885508,
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
};

const c_PARTICLES_WHITE_REPULSE_LARGE = {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#c9c8c5"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 250,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 0.5
      },
      "move": {
        "enable": true,
        "speed": 22.1,
        "direction": "right",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 710.2328774690454,
          "rotateY": 0
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 527.4725274725275,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 584.6623574885508,
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
};

const c_PARTICLES_WHITE_GRAB_LARGE = {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#c9c8c5"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 252.750653390415,
        "color": "#ffffff",
        "opacity": 0.8,
        "width": 0.8
      },
      "move": {
        "enable": true,
        "speed": 22.1,
        "direction": "right",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 710.2328774690454,
          "rotateY": 0
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
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 427.4725274725275,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 584.6623574885508,
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
};

const c_PARTICLES_WHITE_GRAB_LARGE_SUPER_FAST = {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#c9c8c5"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/cutout_star.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 152.750653390415,
        "color": "#CBDAE3",
        "opacity": 0.8,
        "width": 0.8
      },
      "move": {
        "enable": true,
        "speed": 0.15,
        "direction": "left",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 710.2328774690454,
          "rotateY": 0
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
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 350,
          "line_linked": {
            "opacity": 0.75
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 384,
          "duration": 0.2
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
};

if ($(window).width() < 600) {

particlesJS('particles-js', c_PARTICLES_WHITE_GRAB_LARGE_SUPER_FAST);
}  // end small window setting
else { // large window setting

  particlesJS('particles-js', c_PARTICLES_WHITE_GRAB_LARGE_SUPER_FAST);
}  // end large window

// Zoom on preview1 from initial
function zoomIn(event) {
    var pre = document.getElementById("preview1");
    pre.style.visibility = "visible";
    if ($('#allSpace').is(':hover')) {
          pre.style.backgroundImage = "url('img/stars2.jpg')";
      }
    var posX = event.offsetX;
    var posY = event.offsetY;
    pre.style.backgroundPosition=(-posX*9.9)+"px "+(-posY*9.9)+"px";
}

function accelerateParticles() {
    for (let i = 0; i != 100; ++i) {
        window.pJSDom[0].pJS.particles.move.speed = i;
    }
}

function animateDistanceVal(obj, progress, start, end) {
    obj.text(Math.floor(progress * (end - start) + start));
  }

function animateValues(duration) {
    // window.pJSDom[0].pJS.particles.move.speed = 30;
  
    let startTimestamp = null;
    let halfDuration = duration / 2.0;
    let currSpeed = 0.15;
    let addFactor = 0.00;
    let addAmt = 0.06;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        let elapsed = timestamp - startTimestamp;
        const progress = Math.min((elapsed) / duration, 1);
        animateDistanceVal(distanceText, progress, 0, 819170000000000);
        if (elapsed > halfDuration) {
            if (currSpeed > 4) {
                currSpeed -= addFactor;
                addFactor -= addAmt;
            } else {
                currSpeed = 0.25;
            }
        } else {
            currSpeed += addFactor;
            addFactor += addAmt;
        }
        window.pJSDom[0].pJS.particles.move.speed = currSpeed;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
  }

goBtn.click(function() {
    animateValues(10000);
});

function resetState() {
    // window.pJSDom[0].pJS.particles.move.speed = Math.random() * 4;
    window.pJSDom[0].pJS.particles.move.speed = 0.5;
}

resetState();