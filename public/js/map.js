let map = document.getElementById("boucle");

function timerImg() {
    setTimeout(changeImg, 3000);
}

function changeImg() {
        map.src = "public/media/map.png";
}

timerImg();
