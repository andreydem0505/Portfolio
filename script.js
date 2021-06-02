function aboutClick(div, img) {
    div.style.display = "flex";
    img.style.opacity = "0.5";
}

function closeClick(div, img) {
    div.style.display = "none";
    img.style.opacity = "1";
}

function onProjectAboutClick(value) {
    let div = document.getElementById("window"+value);
    let img = document.getElementById("portfolio-img"+value);
    aboutClick(div, img);
}

function onProjectCloseClick(value) {
    let div = document.getElementById("window"+value);
    let img = document.getElementById("portfolio-img"+value);
    closeClick(div, img);
}

function showHamburger() {
    document.getElementById('hamburger').style.display = 'flex';
}

function hideHamburger() {
    document.getElementById('hamburger').style.display = 'none';
}