// for nav-bar
// storing variables
const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");

//    hamburger toggling function
hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active")
navMenu.classList.toggle("active")
})
// activating the nav menu with the hamburger
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
hamburger.classList.remove("active")
navMenu.classList.remove("active")
}))


// Highliting active current page on navigation menu

document.addEventListener('DOMContentLoaded', function() {
    const selector = '.nav-link';
    const elems = Array.from( document.querySelectorAll( selector ) );
    const navigation = document.querySelector( 'nav' );
    
    function makeActive( evt ) {
      const target = evt.target;
      
      if ( !target || !target.matches( selector ) ) {
        return;
      }
      
      elems.forEach( elem => elem.classList.remove( 'active' ) );
        
        evt.target.classList.add( 'active' );
    };
    
    navigation.addEventListener( 'mousedown', makeActive );
    
    } );



    // For speed counting
const counters = document.querySelectorAll(".count");
const speed = 600;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(+counter.getAttribute("data-target"));
    const count = parseInt(+counter.innerText);
    const increment = Math.trunc(target / speed);
    console.log(increment);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();    
});


      
// Animate on scroll

// Get all js-scroll elements on the page
const scrollElements = document.querySelectorAll(".js-scroll");

// Detecting When an Element Is in View 
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

// detect when a percentage of the page has been scrolled.
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
// Assigning class name scrolled to element
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};
// using the forEach method to call the function on all js-scroll elements.
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.28)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
//  passing the above method into a scroll event listener
//  on the window so it runs whenever the user scrolls.
window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


