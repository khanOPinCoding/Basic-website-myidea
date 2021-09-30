const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navlink');
const links = document.querySelectorAll('.navlink li')

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});