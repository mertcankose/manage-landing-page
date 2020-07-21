$(".header-switch").on('click',()=>{
    $(".header").toggleClass("nav-show"); // we added the header because when we click switch button, header could have changed.
    $("body").toggleClass("body-opac");
});