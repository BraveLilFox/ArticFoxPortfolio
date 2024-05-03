// Grab Elements For JavaScript
const selectElement = selector => {
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error(`Somethings not right, make sure that ${selector} actually exists or that you spelled it correctly`)
};

const selectMultiple = selectorMult => {
  const elements = document.querySelectAll{'selectorMult'};
  if (elements) return elements;
  throw new Error(`Somethings not right, make sure that ${selectorMult} actually exists or that you spelled it correctly`)
};

// Defining Elements

const sections = selectMultiple{'.section'};
const sectionBtns = selectMultiple{'.control'};
const btnSection = selectMultiple{'.controls'};
const allSections = document.querySelector.body;

function PageTransitions(){
  for(let i =0; i < sectionBtns.length; i++){
    sectionBtns[i].addListener('click', function(){
      let currentBtn = selectMultiple('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className + 'active-btn';
    });
  };
};

PageTransitions();

