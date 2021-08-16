const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// navbar
const navBar = $(".nav-bar");
// Nút hiện navbar

const buttonsNavbar = $$(".header-on-mobile .btn");

const btnNavbar = $("div.header-on-mobile");
btnNavbar.addEventListener("click", showNavbar);

function showNavbar() {
    // những thứ xuát hiện khi nhất open 
    if(buttonsNavbar[0].classList.contains("active")){
        buttonsNavbar[0].classList.remove("active");
        buttonsNavbar[1].classList.add("active");
        navBar.classList.add("open");
    }
    // những thứ biến mất khi nhất close 
    else{ 
        buttonsNavbar[0].classList.add("active");
        buttonsNavbar[1].classList.remove("active");
        navBar.classList.remove("open");
        removeActiveItem();
    }
}

// Nhấn vào từng item sẽ hiên ra item con của nó
const navBarItems = $$(".nav-bar__item");

function removeActiveItem(){
    navBarItems.forEach((navBarItem) => {
        navBarItem.classList.remove("active");
    });
}

removeActiveItem();
navBarItems.forEach((navBarItem) => {
    navBarItem.onclick = () => {
        removeActiveItem();
        navBarItem.classList.add("active");
    }
})

const navBarOfItems = $(".nav-bar__items");
navBarOfItems.addEventListener("click", (e) =>{
    e.stopPropagation();
})

// nhấn vào nên đen tắt navbar
navBar.addEventListener("click", (e) => {
    e.target.classList.remove("open");
    buttonsNavbar[0].classList.add("active");
    buttonsNavbar[1].classList.remove("active");
})



// ---header effect when scroll---
const header = $(".header");
let headerHeight = header.offsetHeight;

const headerAbove = $(".header__above");
const headerAboveHeight = headerAbove.offsetHeight;

const headerMain = $(".header__main");
const headerMainHeight = headerMain.offsetHeight;

const body = $(".body");

const logo = $(".logo");
let logoTop = logo.offsetTop;

const logoImg = $(".logo__img");
const logoImgWidth = logoImg.offsetWidth;

const upHeaderBtn = $(".upHeader");
function handleHeaderEvent() {
    const scrollTop = (window.scrollTop || window.scrollY) > 0 ? (window.scrollTop || window.scrollY) : 0 ;

    if(scrollTop > headerHeight){
        headerAbove.style.display = "none";
        header.style.height = headerMainHeight + "px";
        body.style.marginTop = headerMainHeight + "px";
        logo.style.top = "0px";
        logoImg.style.width = "100px";
        upHeaderBtn.classList.add("active");
    } 
    else {
        headerAbove.style.display = "flex";
        header.style.height = "125px";
        body.style.marginTop = "125px";
        logo.style.top = "-38px";
        logoImg.style.width = "140px";
        upHeaderBtn.classList.remove("active");
    }
}


// when widthWindow < 1024, off headerAbove
var widthWindow;
window.addEventListener("resize", function() {

    widthWindow = window.innerWidth;
    
    if(widthWindow < 1024) {
        headerAbove.style.display = "none";
        header.style.height = headerMainHeight + "px";
        body.style.marginTop = headerMainHeight + "px";
        logo.style.top = "0px";
        logoImg.style.width = "100px";
        upHeaderBtn.classList.remove("active");
    }
})


window.addEventListener("scroll", () => {
    if(window.innerWidth > 1023){
        handleHeaderEvent();
    }
});




// --- slide
// --body slide
var slideIndexOnBodySlide = 1;
const slidesOnBodySlide = $$(".body__slide__img");
const dotsOnBodySlide = $$(".dot");

showSlidesOnBodySlide(slideIndexOnBodySlide);

dotsOnBodySlide.forEach((dot, index) => {
    dot.addEventListener("click", () =>{
        currentSlide(index+1);
    })
})

function plusSlides(n) {
    showSlidesOnBodySlide(slideIndexOnBodySlide += n)
}

function currentSlide(n){
    showSlidesOnBodySlide(slideIndexOnBodySlide = n)
}

function showSlidesOnBodySlide(n){
    // slideIndexOnBodySlide++;
    for(let i = 0; i < slidesOnBodySlide.length; i++) {
        slidesOnBodySlide[i].classList.remove("active");
    }
    for(let i = 0; i < dotsOnBodySlide.length; i++) {
        dotsOnBodySlide[i].classList.remove("active");
    }
    if(n > slidesOnBodySlide.length){
        slideIndexOnBodySlide = 1;
    }
    if(n < 1){
        slideIndexOnBodySlide = slidesOnBodySlide.length;
    }

    slidesOnBodySlide[slideIndexOnBodySlide - 1].classList.add("active");
    dotsOnBodySlide[slideIndexOnBodySlide - 1].classList.add("active");
    
}

slideIndexOnBodySlide -= 1;
showSlidesOnBodySlideAuto();

function showSlidesOnBodySlideAuto(){
    
    for(let i = 0; i < slidesOnBodySlide.length; i++) {
        slidesOnBodySlide[i].classList.remove("active");
    }
    slideIndexOnBodySlide++;
    if(slideIndexOnBodySlide > slidesOnBodySlide.length){
        slideIndexOnBodySlide = 1;
    }
    for(let i = 0; i < dotsOnBodySlide.length; i++) {
        dotsOnBodySlide[i].classList.remove("active");
    }
    slidesOnBodySlide[slideIndexOnBodySlide - 1].classList.add("active");
    dotsOnBodySlide[slideIndexOnBodySlide - 1].classList.add("active");
    setTimeout(showSlidesOnBodySlideAuto, 6000);
}


// ----body feel----

const slidesOnBodyFeel = $$(".body__feeling__slide-item");
var slideIndexOnBodyFeel = 1;

showSlidesOnBodyFeel(slideIndexOnBodyFeel);

function plusSlidesOnBodyFeel(n) {
    showSlidesOnBodyFeel(slideIndexOnBodyFeel += n)
}

function showSlidesOnBodyFeel(n){
    
    if(n > slidesOnBodyFeel.length){
        slideIndexOnBodyFeel = 1;
    }
    if(n < 1){
        slideIndexOnBodyFeel = slidesOnBodyFeel.length;
    }
    
    for(let i = 0; i < slidesOnBodyFeel.length; i++) {
        slidesOnBodyFeel[i].classList.remove("active");
    }
    
    slidesOnBodyFeel[slideIndexOnBodyFeel - 1].classList.add("active");
    
}

slideIndexOnBodyFeel -= 1;
showSlidesOnBodyFeelAuto();

function showSlidesOnBodyFeelAuto(){
    
    for(let i = 0; i < slidesOnBodyFeel.length; i++) {
        slidesOnBodyFeel[i].classList.remove("active");
    }
    slideIndexOnBodyFeel++;
    if(slideIndexOnBodyFeel > slidesOnBodyFeel.length){
        slideIndexOnBodyFeel = 1;
    }
    slidesOnBodyFeel[slideIndexOnBodyFeel - 1].classList.add("active");
    setTimeout(showSlidesOnBodyFeelAuto, 9000);
}