const button = document.querySelector(".navigation__button");
const navBar = document.querySelector(".navigation__bar");

let width = window.matchMedia("(min-width:48em)");

const widthChange = width => {
    if (width.matches) {
        navBar.classList.remove("nav-active");
    }
};

width.addListener(widthChange);

const showNav = function() {
    navBar.classList.toggle("nav-active");
};

button.addEventListener("click", showNav);