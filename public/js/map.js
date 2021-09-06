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

        /* CREATION DU MARKER SUR LA MAP */
        const marker = L.marker([this.lattitudeMap, this.longitudeMap]);
        this.map.addLayer(marker);
    }
}

/* AFFICHAGE DE LA CARTE AU BOUT DE 10 SEC */
function timerImg() {
    setTimeout(displayMap, 10000);
}

/* MASQUE IMAGE POUR AFFICHER LA CARTE */
function displayMap() {
    const boucle = document.getElementById('boucle');
    const container = document.getElementById('containerBottom');
    container.removeChild(boucle);
    new Carte();
}

timerImg();

