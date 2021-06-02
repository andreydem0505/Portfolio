function aboutClick(div, img) {
    div.style.display = "flex";
    img.style.opacity = "0.5";
}

function closeClick(div, img) {
    div.style.display = "none";
    img.style.opacity = "1";
}

function onProject1AboutClick() {
    let div = document.getElementById("window1");
    let img = document.getElementById("portfolio-img1");
    aboutClick(div, img);
}

function onProject1CloseClick() {
    let div = document.getElementById("window1");
    let img = document.getElementById("portfolio-img1");
    closeClick(div, img);
}

function onProject2AboutClick() {
    let div = document.getElementById("window2");
    let img = document.getElementById("portfolio-img2");
    aboutClick(div, img);
}

function onProject2CloseClick() {
    let div = document.getElementById("window2");
    let img = document.getElementById("portfolio-img2");
    closeClick(div, img);
}