class Carte {
    constructor() {
        this.lattitudeMap = 48.89555632603661;
        this.longitudeMap = 2.2496143257227788;
        this.conteneurMap = document.getElementById("map");
        this.initMap();
    }

    initMap() {
        this.map = L.map('map').setView([this.lattitudeMap, this.longitudeMap], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        const marker = L.marker([this.lattitudeMap, this.longitudeMap]);

        this.map.addLayer(marker);
    }
}


function timerImg() {
    setTimeout(changeImg, 3000);
}


function changeImg() {
    const boucle = document.getElementById('boucle');
    const container = document.getElementById('containerBottom');
    container.removeChild(boucle);
    new Carte();
}

timerImg();

