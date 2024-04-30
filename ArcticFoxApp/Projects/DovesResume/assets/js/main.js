// Grab Elements
const selectElement = selector => {
  const element = document.querySelector(selector)
  if(element) return element;
  throw new Error('Something went, make sure that ${selector} exists or is typed correctly.');
};


// Nav Styles on scroll
