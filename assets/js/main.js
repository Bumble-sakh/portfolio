/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
skillsContent = document.querySelectorAll('.skills__content');

function skillsAnimation(skillsContent) {

    skillsPercentage = skillsContent.querySelectorAll('.skills__percentage');

    skillsPercentage.forEach(el => {
        
        el.style.animation = 'none';
        el.offsetHeight;

        if(el.classList.contains('skills__html')) {
            el.style.width = "90%";
            el.style.animation =  "progres .5s ";
        } else if(el.classList.contains('skills__css')) {
            el.style.width = "80%";
            el.style.animation =  "progres .5s ";
        } else if(el.classList.contains('skills__javascript')) {
            el.style.width = "60%";
            el.style.animation =  "progres .5s ";
        } else if(el.classList.contains('skills__vue')) {
            el.style.width = "75%";
            el.style.animation =  "progres .5s ";
        } else if(el.classList.contains('skills__php')) {
            el.style.width = "80%";
            el.style.animation =  "progres .5s ";
        } else if(el.classList.contains('skills__mysql')) {
            el.style.width = "85%";
            el.style.animation =  "progres .5s ";
        } else if(el.classList.contains('skills__laravel')) {
            el.style.width = "75%";
            el.style.animation =  "progres .5s ";
        }

    });

}

function toogleSkills(e) {

    // if(e.target.classList.contains('skills__arrow')) {
    //     e.currentTarget.classList.toggle('skills__open');
    //     e.currentTarget.classList.toggle('skills__close');
    // }

    if(e.currentTarget.classList.toggle('skills__open')) {
        skillsAnimation(e.currentTarget);
    }
    
    e.currentTarget.classList.toggle('skills__close');
    

}

skillsContent.forEach(n => n.addEventListener('click', toogleSkills));

// skillsArrow = document.querySelectorAll('.skills__arrow');

// function skillsAction() {
 
//     const a = this.closest('.skills__open');
//     const b = this.closest('.skills__close');
    
//     if(a) {
//         a.classList.toggle('skills__close');
//         a.classList.toggle('skills__open');
//     } else {
//         b.classList.toggle('skills__close');
//         b.classList.toggle('skills__open');
//     }

// }

// skillsArrow.forEach(n => n.addEventListener('click', skillsAction));

/*==================== QUALIFICATION TABS ====================*/
const qualButton = document.querySelectorAll('.qualification__button');
const contentEducation = document.getElementById('education');
const contentWork = document.getElementById('work');

function qAction(e) {

    if(e.currentTarget.innerText == 'Work') {
        qualButton[0].classList.remove('qualification__active');
        qualButton[1].classList.add('qualification__active');
        contentEducation.classList.remove('qualification__active');
        contentWork.classList.add('qualification__active');
    } else if(e.currentTarget.innerText == 'Education') {
        qualButton[1].classList.remove('qualification__active');
        qualButton[0].classList.add('qualification__active');
        contentEducation.classList.add('qualification__active');
        contentWork.classList.remove('qualification__active');
    }
    
}

qualButton.forEach(n => n.addEventListener('click', qAction));

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 