// Grab Elements For JavaScript
const selectElement = selector => {
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error(`Somethings not right, make sure that ${selector} actually exists or that you spelled it correctly`)
};

// Defining Elements

const sections = selectElement{'.section'};
const sectionBtns = selectElement{'.control'};
const btnSection = selectElement{'.controls'};
const allSections = document.querySelector.body;

function PageTransitions(){
  for(let i =0; i < sectionBtns.length; i++){
    sectionBtns[i].addListener('click', () =>{
      let currentBtn = selectElement('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className + 'active-btn';
    });
  }
}

PageTransitions();

