let goBtn1 = $("#goBtn1");
let goBtn2 = $("#goBtn2");
let distanceText = $("#distanceText");

const gptFunParam = atob('aHR0cHM6Ly8zendtcmV5czJ5cm53czVlNzJmeDczY3JtYTBod2d1cy5sYW1iZGEtdXJsLnVzLWVhc3QtMi5vbi5hd3M=');
var colorStyles = window.getComputedStyle(document.body);
const c_SMALL_SIZE = 735;
const c_ELLIPSE_SPEED = 300;
const PACE_INTERVAL = 13;
const PERIOD_STOP_MULTIPLY = 20;
const STAR_LOADING_TIME_MS = 10000;
const SPACE_STOP_MULTIPLY = 1.0;

var g_state = {
  currSize: $(window).width(),
  currentlyLoading: false,
  done_writing: false,
  got_img: false,
  bioHistory: [],
  planet_option_1: null,
  planet_option_2: null,
  chosen_planet_info: null,
  captains_log: null,
  b64_dalle: null
};

function runEllipse() {
  setTimeout(function(){
    if (g_state.currentlyLoading) {
      var currTagFrame = g_state.tagFrame;
      $(".loading_tags").each(function(index, element) {
        $(this).html(c_LOADING_TAG_FRAMES[g_state.tagFrame]);
      });
      g_state.tagFrame = (currTagFrame + 1) % c_LOADING_TAG_FRAMES.length;
      runEllipse();
    } else {
      g_state.tagFrame = 0;
    }
  }, c_ELLIPSE_SPEED);
}

function startEllipse() {
  g_state.currentlyLoading = true;
  g_state.tagFrame = 0;
  $(".loading_tags").each(function(index, element) {
    $(this).html(c_LOADING_TAG_FRAMES[g_state.tagFrame]);    
  });
  g_state.tagFrame = (g_state.tagFrame + 1) % c_LOADING_TAG_FRAMES.length;
  runEllipse();
}

function stopLoading() {
  g_state.currentlyLoading = false;
}

const c_LOADING_TAG_FRAMES = [
  "Loading&nbsp;&nbsp;&nbsp;",
  "Loading&nbsp;&nbsp;&nbsp;",
  "Loading.&nbsp;&nbsp;",
  "Loading.&nbsp;&nbsp;",
  "Loading..&nbsp;",
  "Loading..&nbsp;",
  "Loading...",
  "Loading...",
];

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

function handleLambdaError() {
  // startApp();
  resetState();
}

function hitGptFun(requestBody, cb) {
  console.log(requestBody);
  const request = new XMLHttpRequest();
  request.open("POST", gptFunParam);
    request.addEventListener("load", () => {
      if (request.status == 200) {
        let res = JSON.parse(request.responseText);
        if (res.error) {
          console.log("Some error in res: " + res.error);
          handleLambdaError();
        } else {
          cb(res);
        }
      } else {
        console.log(request);
        handleLambdaError();
      }
    });
  request.send(requestBody);
}

function processFirstPlanets(res) {
  console.log(res);
  stopLoading();
  goBtn1.html(res["planet_1"]["name"]);
  goBtn2.html(res["planet_2"]["name"]);
  g_state.planet_option_1 = res["planet_1"]["full_data"];
  g_state.planet_option_2 = res["planet_2"]["full_data"];
}

function processCaptainsLog(res) {
  console.log(res);
  g_state.captains_log = res;
  getImg();
  if (g_state.done_writing) {
    $("#captainsLog").show();
    $("#dalleImg").css("display", "block");    
    charByChar(g_state.captains_log, 0, "#captainsLog", PACE_INTERVAL, null);
  } else {
    console.log("not done describing!")
  }
}

function makeFirstPlanetsReq() {
  const body = JSON.stringify({
    "space": {
      "get_new_planets": true
    }
  }, null, 4);
  hitGptFun(body, processFirstPlanets);
}

function makeCaptainReq(fullPlanetInfo) {
  const body = JSON.stringify({
    "space": {
      "get_captains_log": {
        "full_data": fullPlanetInfo
      }
    }
  }, null, 4);
  hitGptFun(body, processCaptainsLog);
}


function getImg() {
  const body = JSON.stringify({
    "space": {
      "get_img": {
        "full_data": g_state.chosen_planet_info,
        "captains_log": g_state.captains_log
      }
    }
  }, null, 4);
  console.log(body);
  hitGptFun(body, paintImg);
}

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

function animateValues(duration, cb) {
    // window.pJSDom[0].pJS.particles.move.speed = 30;
  
    let startTimestamp = null;
    let halfDuration = duration / 2.0;
    let currSpeed = 0.15;
    let addFactor = 0.00;
    let addAmt = 0.06;
    const currTarget = Math.random() * 10000000000000000;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        let elapsed = timestamp - startTimestamp;
        const progress = Math.min((elapsed) / duration, 1);
        animateDistanceVal(distanceText, progress, 0, currTarget);
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
        } else {
          cb();
        }
    };
    window.requestAnimationFrame(step);
  }

//given a string types that string character by character
function charByChar(text, index, target, pace, cb){
  if (index >= text.length) {
    if (cb) {
      cb();
    }
    return;
  }
  if (!pace) {
    pace = PACE_INTERVAL;
  }
  var periodAddition = 0;
  var spaceAddition = 0;

  currChar = text[index];
  if (currChar === "\n") {
    currChar = "<br>";
  }
  $(target).append(currChar);
  
  if (currChar == "." || currChar == "!" || currChar == "?") {
    periodAddition = pace * PERIOD_STOP_MULTIPLY;
  } else if (currChar == " ") {
    spaceAddition = pace * SPACE_STOP_MULTIPLY;
  }
  index++;

  totalInterval = pace + periodAddition + spaceAddition;  
  setTimeout(function(){
      charByChar(text, index, target, pace, cb);
    }, totalInterval);
}

function paintImg(imgRes) {
  console.log(imgRes["dalle_caption"]);
  g_state.got_img = true;
  $("#dalleImg").attr('src', "data:image/png;base64," + imgRes["dalle_b64"]);
}

function finishDescriptionPainting() {
  g_state.done_writing = true;
  if (g_state.captains_log === null) {
    return;
  } else {
    $("#captainsLog").show();
    $("#dalleImg").css("display", "block");
    charByChar(g_state.captains_log, 0, "#captainsLog", PACE_INTERVAL, null);
  }
}

function paintPlanetDescription(planetDesc) {
  $("#planetDesc").show();
  console.log(planetDesc);
  charByChar(planetDesc, 0, "#planetDesc", PACE_INTERVAL, finishDescriptionPainting);
}

function finishLoadingPlanetDetailsAnim() {
  paintPlanetDescription(g_state.chosen_planet_info);
}

function processChosenPlanet() {
  g_state.currentlyLoading = true;
  animateValues(STAR_LOADING_TIME_MS, finishLoadingPlanetDetailsAnim);
  makeCaptainReq(g_state.chosen_planet_info);
}

goBtn1.click(function() {
  if (!g_state.currentlyLoading) {
      goBtn2.hide();
      g_state.chosen_planet_info = g_state.planet_option_1;
      processChosenPlanet();
    }
  });
  
  goBtn2.click(function() {
    if (!g_state.currentlyLoading) {
      goBtn1.hide();
      g_state.chosen_planet_info = g_state.planet_option_2
      processChosenPlanet();
    }
});

function resetState() {
    g_state.currentlyLoading = true;
    runEllipse();
    // window.pJSDom[0].pJS.particles.move.speed = Math.random() * 4;
    window.pJSDom[0].pJS.particles.move.speed = 0.5;
    g_state.planet_option_1 = null;
    g_state.planet_option_2 = null;
    g_state.captains_log = null;
    g_state.chosen_planet_info = null;
    g_state.done_writing = false;
    g_state.got_img = false;
    $("#captainsLog").hide();    
    $("#planetDesc").hide();
    $("#distanceText").html("00000000000000");
    goBtn1.show();
    goBtn2.show();
}

function startApp() {
  resetState();
  startEllipse();
  makeFirstPlanetsReq();
}

startApp();
