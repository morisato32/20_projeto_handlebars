

const profileContainer = document.querySelector('.profile-container')
const dropdownMenu = document.querySelector('.dropdown-menu')

function showDropdown(e){
    dropdownMenu.classList.toggle('active-dropdown-menu');
}

function hideDropdown(e){
    dropdownMenu.classList.remove('active-dropdown-menu');
}

profileContainer.addEventListener('click', showDropdown);
dropdownMenu.addEventListener('mouseleave', hideDropdown);

