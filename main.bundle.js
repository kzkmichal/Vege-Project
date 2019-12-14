"use strict";
var button = document.querySelector(".navigation__button"),
    navBar = document.querySelector(".navigation__bar"),
    width = window.matchMedia("(min-width:48em)"),
    widthChange = function(t) {
        t.matches && navBar.classList.remove("nav-active");
    };
width.addListener(widthChange);
var showNav = function() {
    navBar.classList.toggle("nav-active");
};
button.addEventListener("click", showNav);