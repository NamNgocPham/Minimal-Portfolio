// WOW
new WOW().init();

// Greensock 
TweenMax.from(".header__logo", 1, {
    delay : 0.4,
    y : 10,
    opacity : 0,
    ease : Expo.easeInOut
});

TweenMax.from(".header__menu--icon", 1, {
    delay : 0.4,
    y : 10,
    opacity : 0,
    ease : Expo.easeInOut
})

TweenMax.staggerFrom(".header__navbar--link", 1, {
    delay : 0.4,
    opacity : 0,
    ease : Expo.easeInOut
}, 0.1)

// Toggle Menu 

var toggleMenu = document.querySelector(".header__menu");
// console.log(toggleMenu);

var menu = document.querySelector(".navbar__mobile");

var menuClose = document.querySelector(".navbar__mobile--close");
// console.log(menuClose)

toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
})

menuClose.addEventListener("click", function() {
    menu.classList.toggle("active");
})

// function toggleMenu() {
//     var menu = document.querySelector(".navbar__mobile");
//     menu.classList.toggle("active");
// }


// Mouse Cursor

const cursor = document.querySelector('.cursor');
// console.log(cursor);
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})