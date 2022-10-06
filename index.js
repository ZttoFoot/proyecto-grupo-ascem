const iconmenu = document.querySelector('.iconmenu');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.iconmenu span');


iconmenu.addEventListener('click', () => {
    enlaces.classList.toggle('activado')
    barras.forEach(child => {child.classList.toggle('animado')});
});