
const searchIcon = document.querySelector('.srIcon');
const searchInput = document.querySelector('.input-field');
const container2 = document.querySelector('.container-2');


function inputSearch() {
    searchInput.classList.toggle('active');
    searchIcon.classList.toggle('active');
};

function showList(){
    container2.classList.toggle('active')
}
