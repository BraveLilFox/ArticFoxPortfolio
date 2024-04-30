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
