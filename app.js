window.addEventListener('load', function () {
  document.querySelector('body').classList.add('is-loaded')
  document.querySelector('body').classList.remove('is-loading')
  compteur();
  seize();
})

if (!window.requestAnimationFrame) {
  window. requestAnimationFrame = function (fn) {
      var timer = 16.66; // 60 fps
      setTimeout(fn,timer);
  }
}



// Animation

function compteur() {
  const compteur = document.getElementById('compteur');

  gsap.to('#compteur', {opacity: 1, duration: 1})
  setTimeout(function () {
    acount()
  },1000)

  function acount() {
    for (let i = 0; i < 101; i++) {
      setTimeout ( function () {
        compteur.innerHTML = i;
        if (i === 100) {
          gsap.to('#compteur', {y: 23, duration: 1})
          setTimeout(function () {
            document.querySelector('.home').classList.add('animeIn');
            animation()
          },500)
        }
      }, i*15)
    }
  }
}

function animation () {
  gsap.to('.home .img--warpper', {scale: 1, rotation: 0, y:0, duration: 1.5, delay: 1, ease:"expo.out"})
  gsap.to('.letter', { duration: 1.5, y: 0, delay: 1, stagger: 0.04,  ease:"slow (0.3, 0.7, false)"})
  gsap.to('nav span', {y: 0, duration: 1, ease:"slow (0.3, 0.7, false)", delay: 1.3, stagger: 0.2})
}

function seize() {
  const h = window.innerHeight;
  const w = window.innerWidth;

  if (w < h) {
    const r  = document.getElementById('pack--isRes')
    r.classList.add('res');
    const e = document.querySelector('.instagram')
    e.classList.remove('row')
    e.classList.add('column')
    const b = document.querySelector('body')
    b.classList.add('res')
  }
}

// Name 
let textWrapper = document.querySelector('.home__name .home__name--letters');

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");



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

/*
const options = {
  root: null,
  rootMargin: '0px',
  threshold = .2
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}
*/


let observer = new IntersectionObserver(function (observables) {
  observables.forEach(function (observable) {
    // L'élément devient visible
    if (observable.intersectionRatio > 0.5) {
      observable.target.classList.add('reveal--visible')
      observer.unobserve(observable.target)
    }
  })
}, {
  threshold: [0.5]
});

// On observe nos éléments
let items = document.querySelectorAll('.reveal')
items.forEach(function (item) {
  observer.observe(item)
})


// Paralax 

{
// Scoll indicator
window.onscroll = function() {
  paralax()
};

let isMobile = false;

function paralax() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("paralax").style.transform  = `translateX(-50%) translate3d(0px, ${scrolled * 7 - 300}px, 0)`;
  /*if (isMobile = true) {
    document.getElementById("presets").style.transform  = `translate3d(0px, ${scrolled * -4}px, 0)`;
  }*/
}

}

/*
// Scoll indicator
window.onscroll = function() {
  paralax()
};

let isMobile = false;

function paralax() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  /*document.getElementById("scroll__indicator").style.top = scrolled + "%";*/
  //document.getElementById("paralax").style.transform  = `translateX(-50%) translate3d(0px, ${scrolled * 5 - 200}px, 0)`;
  /*if (isMobile = true) {
    //document.getElementById("presets").style.transform  = `translate3d(0px, ${scrolled * -4}px, 0)`;
  }*/
//}

// Caroucel
{

let carousel = document.querySelector('.carousel');
let cellCount = 6;
let selectedIndex = 0;

function rotateCarousel() {
  let angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-51.961vw) rotateY(' + angle + 'deg)';
}

let prevButton = document.querySelector('.button--left');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  console.log(selectedIndex);
  rotateCarousel();
});

let nextButton = document.querySelector('.button--right');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  console.log(selectedIndex);
  rotateCarousel();
});
}

// Smooth Scroll ( TUTORIEL/ARTICLE : https://tympanus.net/codrops/2019/07/10/how-to-add-smooth-scrolling-with-inner-image-animations-to-a-web-page/)
