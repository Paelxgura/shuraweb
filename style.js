let menu = document.querySelector('#bar-icon')
let navbar = document.querySelector('.bar')

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('open');
}

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // Adjust the background position based on scroll position
    const parallax = document.getElementById('Home-text');
    const parallax2 = document.getElementById('parallax2');

    // Change the transform property to create the parallax effect
    parallax.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
    parallax2.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
}); 