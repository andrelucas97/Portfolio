/* transformando hamburguer em X */
const menuHamb = document.querySelector('.menu-hamburguer');
menuHamb.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
    menuHamb.classList.toggle('change');

    if (menuHamb.classList.contains('change')){
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}