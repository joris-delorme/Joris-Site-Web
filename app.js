// Name reveal
let textWrapper = document.querySelector('.home__name .home__letters');
        
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
    targets: '.home__name .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
});

// Citation reveal
let citationTextWrapper = document.querySelector('.home__citation .home__citation-letters');
citationTextWrapper.innerHTML = citationTextWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.home__citation .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 600 + 45 * (i+1)
  });

// Scroll Down reveal
anime.timeline({loop: false})
  .add({
    targets: '.scroll-down, .presets-button-wrapper',
    opacity: '1',
    easing: "easeOutExpo",
    duration: 1000,
    delay: 2500
});

// Scroll Down reveal
anime.timeline({loop: false})
  .add({
    targets: '.scroll__line',
    height: '20vh',
    easing: "easeOutExpo",
    duration: 2000,
    delay: 2500
});

// reavel on scroll

const threshold = .2
const options = {
  root: null,
  rootMargin: '0px',
  threshold
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}

window.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(handleIntersect, options)
  const targets = document.querySelectorAll('.reveal')
  targets.forEach(function (target) {
    observer.observe(target)
  })
})

// Scoll indicator

window.onscroll = function() {scrollIndicator()};

function scrollIndicator() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scroll__indicator").style.top = scrolled + "%";
}

// Cursor

let mousex;
let mousey;

$(document).mousemove(function(e) {
  $('.cursor').eq(0).css({left: e.clientX, top: e.clientY});
  $('.rond').eq(0).css({left: e.clientX, top: e.clientY});
  mousex = e.clientX;
  mousey = e.clientY;
});

let timer;
document.onmousemove = function() {
  document.getElementById('cursor').style.transform = "translate(-50%,-50%) scale(0.3, 0.3)";
  clearTimeout(timer);
  timer = setTimeout(function() {
    document.getElementById('cursor').style.transform = "translate(-50%,-50%) scale(1, 1)";
  }, 50)
};

$(document).ready(function () {
  $('#morePresets').click(function () {
      $('#morePresets').toggleClass('active');
      $('#presets').toggleClass('active');
      if ($('#morePresets').hasClass('active')) {
          document.body.style.overflowY = "hidden";
    } else {
          document.body.style.overflowY = "scroll";
    }
  })
})

// Orientation

window.onorientationchange = function() {
  let portraitOrientation = window.matchMedia("(orientation:portrait)");
  if ( portraitOrientation.matches ) {
    console.log("portrait");
  } else {
    const presetsContainer = document.getElementById('presets__container')
    presetsContainer.scrollIntoView();
  }
}
