// Grab Elements
const selectElement = selector => {
  const element = document.querySelector(selector)
  if(element) return element;
  throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};

// Nav Styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement('#header');
  if(this.scrollY >= 15){
    headerElement.classList.add('activated');
  }else{
    headerElement.classList.remove('activated');
  }
};

window.addEventListener('scroll', scrollHeader);

// Open Menu And Search Pop Up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close Search Form Pop Up

// - - Close the search form pop up on esp keypress

// Switch theme/add to local storage
const bodyElement = document.body;
const toggleThemeBtn = selectElement('#theme-toggle-btn');

toggleThemeBtn.addEventListener('click', () =>{
  bodyElement.classList.toggle('light-theme');
});

// Swiper
