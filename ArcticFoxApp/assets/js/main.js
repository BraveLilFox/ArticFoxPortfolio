
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
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    })
  }

  // Sections Active
  btnSection.addEventListener('click', (e) =>{
    const id = e.target.dataset.id;
    if(id){
      //remove selected from the other btns
      sectionBtns.forEach((btn) =>{
        btn.classList.remove('active');
      })
      e.target.classList.add('active');

      // Hide other sections
      sections.forEach((section)=>{
        sections.classList.remove('active');
      })

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })
}

PageTransitions();

