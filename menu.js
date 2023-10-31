const toggleBtn = document.querySelector('.menu-mobile-img');
const dropDownMenu = document.querySelector('.menu-mobile');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
}