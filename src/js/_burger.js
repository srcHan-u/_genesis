const { log } = console;
const openMenuButton = document.getElementById('buttonOpen');
const closedMenuButton = document.getElementById('buttonClosed');
const burgerMenu = document.getElementById('burgerMenu');

let windowWidth = window.innerWidth;
log(windowWidth);

if (windowWidth <= 320) {
  closedMenuButton.onclick = isntShowMenu;
  openMenuButton.onclick = isShowMenu;
} else {
  burgerMenu.style.display = 'none';
}

// function menuDisplayController (x) {

// alert(x)
// const burgerMenu = document.getElementById('burgerMenu')
// burgerMenu.style.transition = duration;
// burgerMenu.style.left = x;
// burgerMenu.style.opacity = visible;
// alert("hello")
// }

function isShowMenu() {
  let x = '1%';
  let duration = '1.2s';
  let isVisible = '1';

  burgerMenu.style.transition = duration;
  burgerMenu.style.left = x;
  burgerMenu.style.opacity = isVisible;
}

function isntShowMenu() {
  let x = '-100%';
  let duration = '1.2s';
  let isntVisible = '0';

  burgerMenu.style.transition = duration;
  burgerMenu.style.left = x;
  burgerMenu.style.opacity = isntVisible;
}

log(openMenuButton);
