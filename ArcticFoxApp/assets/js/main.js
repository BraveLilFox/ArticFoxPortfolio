// Grab Elements For JavaScript
const selectElement = selector => {
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error(`Somethings not right, make sure that ${selector} actually exists or that you spelled it correctly`)
};
