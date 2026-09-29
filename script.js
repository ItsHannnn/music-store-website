const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shop = document.querySelector('#shop');

document.addEventListener('click', function(e){
    if (!hamburger.contains (e.target) && !navbarNav.contains (e.target)){
        navbarNav.classList.remove('active')
    }

    if (!searchButton.contains (e.target) && !searchForm.contains (e.target)){
        searchForm.classList.remove('active')
    }

    if (!shop.contains (e.target) && !shopCart.contains (e.target)){
        shopCart.classList.remove('active')
    }
});

const dropdownMenu = document.querySelector('.drop-down-menu');
const beli = document.querySelector('#beli');

let clickTimer;

document.querySelector('#beli').onclick = (e) => {
    dropdownMenu.classList.toggle('active')
    e.preventDefault();
};

document.addEventListener('click', function (e){
    if (!beli.contains (e.target) && !dropdownMenu.contains (e.target)){
        dropdownMenu.classList.remove('active');
    };
});

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault ();
};

const shopCart = document.querySelector('.shop-cart');

document.querySelector('#shop').onclick = (e) => {
    shopCart.classList.toggle('active');
    e.preventDefault();
};

const Modal = document.querySelector('#modal');
const tombolDetail = document.querySelector('.tombol-detail')
const tombolClose = document.querySelector('.close-icon');

document.addEventListener('click', (e) => {
    if(e.target.closest('.tombol-detail')) {
        e.preventDefault();
        Modal.style.display = 'flex'
    };
});

tombolClose.onclick = (e) => {
    e.preventDefault();
    Modal.style.display = 'none'
};

window.onclick = (e) => {
    if(e.target === Modal) {
        Modal.style.display = 'none'
    };
};



