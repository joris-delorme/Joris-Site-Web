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

// presets

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

// Start

const body = document.querySelector('body')

window.onload = function () {
  body.className = 'load';
  animation();
}

function animation() {
  setTimeout(function () {
    loading();
  },1000)
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
      delay: (el, i) => 3500 + 50 * i
  });

  anime.timeline({loop: false})
  .add({
      targets: 'li',
      translateX: ["2.1em", 0],
      opacity: 1,
      duration: 1500,
      easing: "easeOutExpo",
      delay: (el, i) => 3500 + 200 * i
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
      delay: (el, i) => 3500 + 600 + 45 * (i+1)
    });

 
  anime.timeline({loop: false})
    .add({
      targets: '.presets-button-wrapper',
      opacity: '1',
      easing: "easeOutExpo",
      duration: 2000,
      delay: 3500 + 2000
  });

  anime.timeline({loop: false})
    .add({
      targets: '.scroll-down',
      opacity: '1',
      easing: "easeOutExpo",
      duration: 1000,
      delay: 3500 + 2500
  });

  // Scroll Down reveal
  anime.timeline({loop: false})
    .add({
      targets: '.scroll__line',
      height: '20vh',
      easing: "easeOutExpo",
      duration: 2000,
      delay: 3500 + 1500
  });

  anime.timeline({loop: false})
  .add({
      targets: '.compteur',
      opacity: 1,
      easing: "easeOutExpo",
      duration: 100,
  });
}

function loading() {
  for (let i = 0; i < 101; i++) {
    setTimeout ( function () {
      const compteur = document.getElementById('compteur');
      compteur.innerHTML = i;
      if (i === 100) {
        setTimeout(function () {
          compteur.className = 'hidde';
        },300)
      }
    }, i*15)
  }
}




// Scoll indicator

window.onscroll = function() {scrollIndicator()};

function scrollIndicator() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scroll__indicator").style.top = scrolled + "%";
  //document.getElementById("background").style.transform  = `translate3d(0px, ${scrolled * 1 + 200}px, 0)`;
}

const bodyScroll = document.body,
    scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
    height = scrollWrap.getBoundingClientRect().height - 1,
    speed = 0.03;
let offset = 0;

bodyScroll.style.height = Math.floor(height) + "px";

function smoothScroll() {

  offset += (window.pageYOffset - offset) * speed;
  var scroll = `translate3d(0px, -${offset}px, 0)`;
  scrollWrap.style.transform = scroll;
  callScroll = requestAnimationFrame(smoothScroll);
}
smoothScroll();

/*
window.onscroll =function () {
  smoothScroll();
}*/