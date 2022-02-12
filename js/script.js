let list = document.querySelectorAll('ul li');
var marker_1 = document.querySelector('#marker_1');
var marker_2 = document.querySelector('#marker_2');
var marker_3 = document.querySelector('#marker_3');
var marker_4 = document.querySelector('#marker_4');
var marker_5 = document.querySelector('#marker_5');
var marker_6 = document.querySelector('#marker_6');

function slider_1() {
    marker_1.style.display = "inline-block";
    marker_2.style.display = "none";
    marker_3.style.display = "none";
    marker_4.style.display = "none";
    marker_5.style.display = "none";
    marker_6.style.display = "none";
}
function slider_2() {
    marker_1.style.display = "none";
    marker_2.style.display = "inline-block";
    marker_3.style.display = "none";
    marker_4.style.display = "none";
    marker_5.style.display = "none";
    marker_6.style.display = "none";
}
function slider_3() {
    marker_1.style.display = "none";
    marker_2.style.display = "none";
    marker_3.style.display = "inline-block";
    marker_4.style.display = "none";
    marker_5.style.display = "none";
    marker_6.style.display = "none";
}
function slider_4() {
    marker_1.style.display = "none";
    marker_2.style.display = "none";
    marker_3.style.display = "none";
    marker_4.style.display = "inline-block";
    marker_5.style.display = "none";
    marker_6.style.display = "none";
}
function slider_5() {
    marker_1.style.display = "none";
    marker_2.style.display = "none";
    marker_3.style.display = "none";
    marker_4.style.display = "none";
    marker_5.style.display = "inline-block";
    marker_6.style.display = "none";
}
function slider_6() {
    marker_1.style.display = "none";
    marker_2.style.display = "none";
    marker_3.style.display = "none";
    marker_4.style.display = "none";
    marker_5.style.display = "none";
    marker_6.style.display = "inline-block";
}


function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  } 
var operatingSystem = getOS();
console.log(operatingSystem);

if (operatingSystem = "Windows") {
VanillaTilt.init(document.querySelectorAll(".cardLayout"), {
    max: 15,
    speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".priceCardLayout"), {
    max: 15,
    speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".faqCardLayout"), {
    max: 5,
    speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".aboutCardLayout"), {
    max: 5,
    speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".contactCardLayout"), {
    max: 15,
    speed: 400,
});
}

else if (operatingSystem = "Mac OS") {
VanillaTilt.init(document.querySelectorAll(".cardLayout"), {
    max: 15,
    speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".priceCardLayout"), {
  max: 15,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".faqCardLayout"), {
  max: 5,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".aboutCardLayout"), {
  max: 5,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".contactCardLayout"), {
  max: 15,
  speed: 400,
});
}

else if (operatingSystem = "Linux") {
VanillaTilt.init(document.querySelectorAll(".cardLayout"), {
    max: 15,
    speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".priceCardLayout"), {
  max: 15,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".faqCardLayout"), {
  max: 5,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".aboutCardLayout"), {
  max: 5,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".contactCardLayout"), {
  max: 15,
  speed: 400,
});
}

else {
VanillaTilt.init(document.querySelectorAll(".cardLayout"), {
    max: 0,
    speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".priceCardLayout"), {
  max: 0,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".faqCardLayout"), {
  max: 0,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".aboutCardLayout"), {
  max: 0,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".contactCardLayout"), {
  max: 0,
  speed: 400,
});
}