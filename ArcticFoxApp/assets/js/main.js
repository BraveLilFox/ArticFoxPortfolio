
// Grab Elements For JavaScript
const selectElement = selector => {
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error(`Somethings not right, make sure that ${selector} actually exists or that you spelled it correctly`);
};

// Defining Elements

const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.control');
const btnSection = document.querySelectorAll('.controls');
const allSections = document.querySelector.body;

function PageTransitions(){
  for(let i = 0; i < sectionBtns.length; i++){
    sectionBtns[i].addListener('click', function(){
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className + 'active-btn';
    })
  }
}

PageTransitions();

