
let menuBar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    menuBar.classList.remove('fa-times');
    navbar.classList.remove('active');
    if(window.scrollY > 60) {
        document.querySelector("#scroll-top").classList.add("active");
    }
    else {
        document.querySelector("#scroll-top").classList.remove("active");
    }
}

// Features Loading
function loading() {
    document.querySelector(".loading-container").classList.add("fade-out");
}
function fadeOut() {
    setInterval(loading, 3500);
}

window.onload = fadeOut();