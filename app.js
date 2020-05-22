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
    delay: (el, i) => 1000 + 45 * (i+1)
  });

// Scroll Down reveal
anime.timeline({loop: false})
  .add({
    targets: '.scroll-down',
    opacity: '1',
    easing: "easeOutExpo",
    duration: 1000,
    delay: 5000
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

// about me

$(document).ready(function () {
  $('.about-me__button').click(function () {
      $('.about-me__button').toggleClass('active');
      $('.about-me').toggleClass('active');
      if ($('.about-me__button').hasClass('active')) {
          document.body.style.overflowY = "hidden";
    } else {
          document.body.style.overflowY = "scroll";
    }
  })
})
