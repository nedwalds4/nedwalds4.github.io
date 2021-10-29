
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElms = document.querySelectorAll('.has-fade');
const hero = document.querySelector('.hero');

const slides = document.querySelector('.slide_container');
const myslides = document.querySelector('.hero__slideshow_1');

btnHamburger.addEventListener('click', function(){
    console.log('testing hamburger');

    if(header.classList.contains('open')){ //close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElms.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
       
    }
    else { // open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElms.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');

        });
       
        
    }

});

const next = document.querySelector('.arrow__next');
const prev = document.querySelector('.arrow__prev');


next.addEventListener('click', function(){
    if(myslides.classList.contains('hero__slideshow_1')){
        myslides.classList.add('hero__slideshow_2'); 
        myslides.classList.remove('hero__slideshow_1');
        
    }
    else {
        if(myslides.classList.contains('hero__slideshow_2')){
            myslides.classList.add('hero__slideshow_3');
            myslides.classList.remove('hero__slideshow_2');
        }
        else {
            myslides.classList.add('hero__slideshow_1');
            myslides.classList.remove('hero__slideshow_3');
        }
        
    }

    if(!myslides.classList.contains('img_fade')){
        myslides.classList.add('img_fade');
    }
    else {
        myslides.classList.remove('img_fade');

        setTimeout(function(){
            myslides.classList.add('img_fade');
        }, 0);
    } 
});  

prev.addEventListener('click', function(){
    if(myslides.classList.contains('hero__slideshow_1')){
        myslides.classList.add('hero__slideshow_3'); 
        myslides.classList.remove('hero__slideshow_1');
        
    }
    else {
        if(myslides.classList.contains('hero__slideshow_2')){
            myslides.classList.add('hero__slideshow_1');
            myslides.classList.remove('hero__slideshow_2');
        }
        else {
            myslides.classList.add('hero__slideshow_2');
            myslides.classList.remove('hero__slideshow_3');
        }
        
    }

    if(!myslides.classList.contains('img_fade')){
        myslides.classList.add('img_fade');
    }
    else {
        myslides.classList.remove('img_fade');

        setTimeout(function(){
            myslides.classList.add('img_fade');
        }, 0);
    } 
});  



var inView = function (elm) {
    var bounding = slides.getBoundingClientRect();
    return(
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/*
while(inView(slides)) { 
    if(myslides.classList.contains('hero__slideshow_1')) {
        setTimeout(function(){
            myslides.classList.remove('hero__slideshow_1');
        }, 0);
        setTimeout(function(){
            myslides.classList.add('hero__slideshow_2');
        }, 0);
    }
    
}*/



window.onscroll = function() {addSticky()};
window.onscroll = function() {removeSticky()};

var sticky = header.offsetTop;

function addSticky() {
    if(window.pageYOffset >= sticky) {
        header.classList.add("header__sticky");
        hero.classList.add("hero__sticky");

    } else {
        header.classList.remove("header__sticky");
        hero.classList.remove("hero__sticky");
    }

};

function removeSticky() {
    if(window.pageYOffset == 0) {
        header.classList.remove("header__sticky");
        hero.classList.remove("hero__sticky");
    } else {
        header.classList.add("header__sticky");
        hero.classList.add("hero__sticky");
    }

};


