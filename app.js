
window.onload = function () {
  animation();
  seize();
}

function seize() {
  const h = window.innerHeight;
  const w = window.innerWidth;

  if (w < h) {
    const r  = document.getElementById('pack--isRes')
    r.classList.add('res');7
  }
}

function rev() {
  let nbr = 0;
  let revWrapper;

  for (let i = 1; i < 4; i++){
    nbr = nbr + 1;
    revWrapper = document.querySelector('.textRev-'+nbr+' .text--letters');
    revWrapper.innerHTML = revWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  } 
}

rev()

function animation() {
  // Compteur animation
  setTimeout(function () {
    loading();
  },1000)

  // Name 
  let textWrapper = document.querySelector('.home__name .home__name--letters');

  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
  .add({
      targets: '.home__name .letter',
      translateY: ["-1.1em", 0],
      translateX: ["0", 0],
      translateZ: 0,
      duration: 1500,
      easing: "easeOutExpo",
      delay: (el, i) => 3500 + 50 * i
  });

  anime.timeline({loop: false})
  .add({
      targets: '.anime--content .anime',
      translateY: ["-5.1em", 0],
      translateX: ["0", 0],
      translateZ: 0,
      duration: 1500,
      easing: "easeOutExpo",
      delay: (el, i) => 3500 + 350 * i
  });

  anime.timeline({loop: false})
  .add({
      targets: '#compteur',
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

function presetsOpen() {
  let elm = document.getElementById('pack__reaval'),
      close = document.getElementById('close--presets'),
      image = document.getElementById('pack__img')
      imageRes = document.getElementById('pack__img--res')
  
  elm.classList.add('active');
  image.classList.add('active');
  imageRes.classList.add('active');

  setTimeout(function () {
    elm.classList.add('reaval');
    close.classList.add('reaval');
  },750)

}

function presetsClose() {
  let elm = document.getElementById('pack__reaval'),
      close = document.getElementById('close--presets'),
      image = document.getElementById('pack__img')
      imageRes = document.getElementById('pack__img--res')

  elm.classList.add('close');
  image.classList.add('close');
  imageRes.classList.add('close');
  close.classList.add('close');
  
  setTimeout(function () {
    elm.classList.remove('active');
    image.classList.remove('active');
    imageRes.classList.remove('active');
    elm.classList.remove('close');
    image.classList.remove('close');
    imageRes.classList.remove('close');
    close.classList.remove('close');
    elm.classList.remove('reaval');
    close.classList.remove('reaval');
  },1000)
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






/* reavel on scroll

// Cursor
let mousex;
let mousey;

$(document).mousemove(function(e) {
  $('.cursor').eq(0).css({left: e.clientX, top: e.clientY});
  $('.rond').eq(0).css({left: e.clientX, top: e.clientY});
  mousex = e.clientX;
  mousey = e.clientY;
});
// Cursor Animation
let timer;
document.onmousemove = function() {
  document.getElementById('cursor').style.transform = "translate(-50%,-50%) scale(0.3, 0.3)";
  clearTimeout(timer);
  timer = setTimeout(function() {
    document.getElementById('cursor').style.transform = "translate(-50%,-50%) scale(1, 1)";
  }, 50)
};

// Presets Button
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

// Ce lance quand la page a finit de charger
const body = document.querySelector('body')

window.onload = function () {
  body.className = 'load';
  animation();
}

// All Animation
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

// Compteur animation
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
window.onscroll = function() {
  scrollIndicator()
};

let isMobile = false;

function scrollIndicator() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scroll__indicator").style.top = scrolled + "%";
  if (isMobile = true) {
    //document.getElementById("presets").style.transform  = `translate3d(0px, ${scrolled * -4}px, 0)`;
  }
}

// Smooth Scroll Page
const bodyScroll = document.body,
    scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
    height = scrollWrap.getBoundingClientRect().height - 1,
    speed = 0.04;
let offset = 0;
bodyScroll.style.height = Math.floor(height) + "px";

function desktopScroll() {
  offset += (window.pageYOffset - offset) * speed;
  offset = +offset.toFixed(2);
  let scroll = `translate3d(0px, -${offset}px, 0)`;
  //document.getElementById("presets").style.transform  = `translate3d(0px, ${offset * -0.5}px, 0)`;
  scrollWrap.style.transform = scroll;
  callScroll = requestAnimationFrame(desktopScroll, 40);
}

// Mobile or Desktop ?
if (/Mobi|Android/i.test(navigator.userAgent)) {
  document.getElementById('smooth-scroll-wrapper').style.position = 'relative';
  isMobile = true;
}else {

  desktopScroll()
}

*/