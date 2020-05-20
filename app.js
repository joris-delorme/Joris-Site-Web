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

// Animation

const circularText = document.querySelector(".loading-page__circular-text");
const line = document.querySelectorAll(".line");
const left = document.querySelectorAll(".left");
const right = document.querySelectorAll(".right");
const loadingPage = document.querySelectorAll(".loading-page");
const nav__line = document.querySelectorAll("#nav__line");
const scrollDown = document.querySelectorAll(".scroll-down");

const tl = new TimelineMax();

tl.fromTo(circularText,0.1, {opacity : "0"}, {opacity : "0", ease: Power2.easeIn})
tl.fromTo(circularText,0.7, {transform: "translate(-50%,-50%)  rotate(190deg) scale(0.5)", opacity : "0"}, {transform: "translate(-50%,-50%) rotate(0deg) scale(1)",opacity : "1", ease: Power2.easeIn})
.fromTo(circularText,3,{transform: "translate(-50%,-50%) rotate(0deg)"}, {transform: "translate(-50%,-50%) rotate(177deg)", ease: Power2.easeout})
.fromTo(circularText,0.7, {transform: "translate(-50%,-50%) rotate(177deg) scale(1)", opacity : "1"}, {transform: "translate(-50%,-50%) rotate(177deg) scale(2)",opacity : "0", ease: Power2.easeInOut})
.to(loadingPage,0.1,{display : "none"})
.to(nav__line,0.01,{opacity: "1"})
.fromTo(nav__line,1,{height: "0%"}, {height: "20%", ease: Power2.easeInOut})
.fromTo(scrollDown,1,{opacity: "0"}, {opacity: "1", ease: Power2.easeInOut})

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
    delay: (el, i) => 4000 + 50 * i
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
