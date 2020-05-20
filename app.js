const nav = document.querySelector('nav')
const body = document.querySelector("body");
const scrollbar = document.querySelector("#nav__line");


window.addEventListener('scroll', ()=> {

    let scrollValue = window.scrollY;
    let bodyHeight = body.clientHeight - window.innerHeight;

    let progressPercentage = (scrollValue / bodyHeight) * 70;

    scrollbar.style.height = progressPercentage + 20 + "%";

    let y = window.scrollY;
    if (y == 0) {
        nav.classList.remove("active");
    } else {
        nav.classList.add("active")
    }
})

// Wrap every letter in a span
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
    delay: (el, i) => 5000 + 50 * i
});

// Wrap every letter in a span
let homeIndicator__textWrapper = document.querySelector('.home__indicator');
homeIndicator__textWrapper.innerHTML = homeIndicator__textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.home__indicator .letter',
    opacity: '1',
    translateX: [100,-5],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 6000 + 90 * i
  });
  
// Wrap every letter in a span

let line__textWrapper = document.querySelector('#nav__line');

anime.timeline({loop: false})
  .add({
    targets: '#nav__line',
    opacity: '1',
    height: [0, '20%'],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 5000 + 90 * i
  });

// reavel on scroll

const threshold = .9
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

// Wrap every letter in a span
let citationTextWrapper = document.querySelector('.home__citation .home__citation-letters');
citationTextWrapper.innerHTML = citationTextWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.home__citation .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 6000 + 45 * (i+1)
  });