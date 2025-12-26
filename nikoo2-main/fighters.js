const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // slide nav in/out
    setTimeout(() => {
        navLinks.classList.toggle('show'); // smooth animation
    }, 10);
});
