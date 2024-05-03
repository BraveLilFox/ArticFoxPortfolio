
// Defining Elements

const sections = document.querySelectorAll('.section');
const btnSection = document.querySelectorAll('.controls');
const sectionBtns = document.querySelectorAll('.control');
const allSections = document.querySelector.body;

function PageTransitions(){
  //Button click active class
  for(let i = 0; i < sectionBtns.length; i++){
    sectionBtns[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('.active-btn', '');
      this.className + ' active-btn';
    });
  };
};

PageTransitions();

