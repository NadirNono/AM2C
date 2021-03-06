
    var lat = 43.49280152029997;
		var lon = 5.333083458748433;
		var macarte = null;
    // Nous initialisons une liste de marqueurs
   var villes = {
	"Technopôle de l’Arbois<br>Bâtiment Lavoisier<br>Avenue Louis Philibert<br>13100 Aix-la-duranne": { "lat": 43.49280152029997, "lon": 5.333083458748433 },
	"ZI La Chapelette<br>Rue Pierre de Gilles de Genes<br>80200 Peronne": { "lat": 49.9105479, "lon": 2.9235353999999916 }
  };
    // Fonction d'initialisation de la carte
        function initMap() {
          // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
          macarte = L.map('map').setView([lat, lon], 4);
          // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
          L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            // Il est toujours bien de laisser le lien vers la source des données
            attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
            minZoom: 1,
            maxZoom: 20
          }).addTo(macarte);
          // Nous parcourons la liste des villes
          for (ville in villes) {
            var marker = L.marker([villes[ville].lat, villes[ville].lon]).addTo(macarte);
            // Nous ajoutons la popup. A noter que son contenu (ici la variable ville) peut être du HTML
	          marker.bindPopup(ville);
          }               	
        }
    window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap(); 
    };