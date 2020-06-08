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

  function revCompteur() {
    let opacity = 0;
    function decrease () {
        opacity += 0.01;
        if (opacity >= 1){
            // complete
            compteur.style.opacity = 1;
            acount()
            return true;
        }
        compteur.style.opacity = opacity;
        requestAnimationFrame(decrease);
    }
    decrease();
  }

  revCompteur()

  function acount() {
    for (let i = 0; i < 101; i++) {
      setTimeout ( function () {
        compteur.innerHTML = i;
        if (i === 100) {
          setTimeout(function () {
            compteur.className = 'hidde';
            animation()
          },300)
        }
      }, i*15)
    }
  }

}

function seize() {
  const h = window.innerHeight;
  const w = window.innerWidth;

  if (w < h) {
    const r  = document.getElementById('pack--isRes')
    r.classList.add('res');
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
      delay: (el, i) => 500 + 50 * i
  });

  anime.timeline({loop: false})
  .add({
      targets: '.anime--content .anime',
      translateY: ["-5.1em", 0],
      translateX: ["0", 0],
      translateZ: 0,
      duration: 1500,
      easing: "easeOutExpo",
      delay: (el, i) => 500 + 350 * i
  });


  anime.timeline({loop: false})
  .add({
      targets: '.home .img--warpper',
      opacity: 1,
      easing: "easeOutExpo",
      duration: 1000,
      delay: 600,
  });
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
window.onscroll = function() {
  paralax()
};

let isMobile = false;

function paralax() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  /*document.getElementById("scroll__indicator").style.top = scrolled + "%";*/
  document.getElementById("paralax").style.transform  = `translateX(-50%) translate3d(0px, ${scrolled * 5 - 200}px, 0)`;
  /*if (isMobile = true) {
    //document.getElementById("presets").style.transform  = `translate3d(0px, ${scrolled * -4}px, 0)`;
  }*/
}

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
{
  // helper functions
  const MathUtils = {
      // map number x from range [a, b] to [c, d]
      map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c,
      // linear interpolation
      lerp: (a, b, n) => (1 - n) * a + n * b
  };

  // body element
  const body = document.body;
  
  // calculate the viewport size
  let winsize;
  const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
  calcWinsize();
  // and recalculate on resize
  window.addEventListener('resize', calcWinsize);

  // scroll position and update function
  let docScroll;
  const getPageYScroll = () => docScroll = window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener('scroll', getPageYScroll);


  // SmoothScroll
  class SmoothScroll {
      constructor() {
          // the <main> element
          this.DOM = {main: document.querySelector('main')};
          // the scrollable element
          // we translate this element when scrolling (y-axis)
          this.DOM.scrollable = this.DOM.main.querySelector('div[data-scroll]');
          // the items on the page
          this.items = [];
          [...this.DOM.main.querySelectorAll('.content > .item')].forEach(item => this.items.push(new Item(item)));
          // here we define which property will change as we scroll the page
          // in this case we will be translating on the y-axis
          // we interpolate between the previous and current value to achieve the smooth scrolling effect
          this.renderedStyles = {
              translationY: {
                  // interpolated value
                  previous: 0, 
                  // current value
                  current: 0, 
                  // amount to interpolate
                  ease: 0.1,
                  // current value setter
                  // in this case the value of the translation will be the same like the document scroll
                  setValue: () => docScroll
              }
          };
          // set the body's height
          this.setSize();
          // set the initial values
          this.update();
          // the <main> element's style needs to be modified
          this.style();
          // init/bind events
          this.initEvents();
          // start the render loop
          requestAnimationFrame(() => this.render());
      }
      update() {
          // sets the initial value (no interpolation) - translate the scroll value
          for (const key in this.renderedStyles ) {
              this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
          }   
          // translate the scrollable element
          this.layout();
      }
      layout() {
          // translates the scrollable element
          this.DOM.scrollable.style.transform = `translate3d(0,${-1*this.renderedStyles.translationY.previous}px,0)`;
      }
      setSize() {
          // set the heigh of the body in order to keep the scrollbar on the page
          body.style.height = `${this.DOM.scrollable.scrollHeight}px`;
      }
      style() {
          // the <main> needs to "stick" to the screen and not scroll
          // for that we set it to position fixed and overflow hidden 
          this.DOM.main.style.position = 'fixed';
          this.DOM.main.style.width = this.DOM.main.style.height = '100%';
          this.DOM.main.style.top = this.DOM.main.style.left = 0;
          this.DOM.main.style.overflow = 'hidden';
      }
      initEvents() {
          // on resize reset the body's height
          window.addEventListener('resize', () => this.setSize());
      }
      render() {
          // update the current and interpolated values
          for (const key in this.renderedStyles ) {
              this.renderedStyles[key].current = this.renderedStyles[key].setValue();
              this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
          }
          // and translate the scrollable element
          this.layout();
          
          // for every item
          for (const item of this.items) {
              // if the item is inside the viewport call it's render function
              // this will update the item's inner image translation, based on the document scroll value and the item's position on the viewport
              if ( item.isVisible ) {
                  item.render();
              }
          }
          
          // loop..
          requestAnimationFrame(() => this.render());
      }
  }

  /***********************************/
  /********** Preload stuff **********/

  getPageYScroll();
  // Initialize the Smooth Scrolling
  new SmoothScroll();
  
}