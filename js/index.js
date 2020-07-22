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
