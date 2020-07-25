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

//************** 

//FLICKITY
var options = {
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  autoPlay: true,
  autoPlay: 2000,
  selectedAttraction: 0.015,
  friction: 0.20
}

// disable draggable at 1200px
if ( matchMedia('screen and (max-width: 991.98px)').matches ) {
  options.pageDots = true;
}

$('.testimonial-people').flickity(options);




//************************



const form = document.querySelector('form');
const email = document.querySelector('#email');

//Form Control
form.addEventListener('submit', (e)=>{
  e.preventDefault();

  checkInputs();
});

function checkInputs(){
  const emailValue = email.value.trim();
  //email control
  if(emailValue === ''){
    setErrorFor(email,'email cannot be blank!');
  }else if(!isEmail(emailValue)){
    setErrorFor(email, 'Not a valid email');
  }else{
    setSuccessFor(email);
  }
}

function setErrorFor(input,message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className='form-control error';
  small.innerText=message;
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}


//header




$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $(".header").addClass("active");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $(".header").removeClass("active");
  }
});
