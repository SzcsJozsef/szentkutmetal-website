const mobileBtn = document.querySelector(".navbar-mobile-icon");
const burgerIcon = document.getElementById("burger-icon");
const xIcon = document.getElementById("x-icon");
const mobileNav = document.querySelector(".mobile-nav");
const clickOverLay = document.getElementById("overlay");

const goTop = document.querySelector(".go-to-top");

const hidden = "hidden";
const display = "displayed";
const navOpen = "open";

let isMobileNavbarOpen = false;


mobileBtn.onclick = function () {

    if (!isMobileNavbarOpen) {

        burgerIcon.classList.add(hidden);
        burgerIcon.classList.remove(display);

        xIcon.classList.add(display);
        xIcon.classList.remove(hidden);

        mobileNav.classList.add(navOpen);

        

        isMobileNavbarOpen = true;

    } else {
        xIcon.classList.add(hidden);
        xIcon.classList.remove(display);

        burgerIcon.classList.add(display);
        burgerIcon.classList.remove(hidden);

        mobileNav.classList.remove(navOpen);

        

        isMobileNavbarOpen = false;
    }

}

clickOverLay.onclick = function () {
    xIcon.classList.add(hidden);
    xIcon.classList.remove(display);

    burgerIcon.classList.add(display);
    burgerIcon.classList.remove(hidden);

    mobileNav.classList.remove(navOpen);

    isMobileNavbarOpen = false;

}

window.addEventListener("scroll", checkHeight);

function checkHeight(){
    if(window.scrollY > 100){
        goTop.style.display = "flex";
    }
    else{
        goTop.style.display = "none";
    }
}


goTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});