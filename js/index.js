//hamburger menu
const headerSwitch = document.querySelector('.header-switch');
const header = document.querySelector('.header');
const headerSwitchClose = document.querySelector('.header-switch-close');

headerSwitch.addEventListener('click',()=>{
    header.classList.toggle("nav-show");
    headerSwitch.style.display = "none";
    headerSwitchClose.style.display="flex";
});

headerSwitchClose.addEventListener('click',()=>{
    header.classList.toggle("nav-show");
    headerSwitch.style.display = "flex";
    headerSwitchClose.style.display="none";
});


/*
//flickity slider (items doesn't seen anymore)
var elem = document.querySelector('.testimonial-people');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});
*/
