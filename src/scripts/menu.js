const menuButton = document.getElementsByClassName('menu-button')[0];
const menuScreen = document.getElementsByClassName('menu-screen')[0];
const menuLinks = document.querySelectorAll('.menu-screen a');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  menuScreen.classList.toggle('active');
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    menuScreen.classList.toggle('active');
  })
})
