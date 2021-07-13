  fetch('extern/pokemon.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Aufruf der pokemon_anzeigen() -Funktion, die weiter unten definiert ist.
      // Die Funktion erwartet als Parameter ein JS-Objekt.
      // Die empfangegen JSON-Daten werden von JS direkt in ein Objekt umgewandelt.
      // Wir geben der Funktion data als Parameter mit
      pokemon_anzeigen(data);
    })
    .catch(function(error) {
      console.log('Error: ' + error.message);
    });

    // Die Funktion pokemon_anzeigen()
    function pokemon_anzeigen(person_param){    	
		for(let i = 0; i < person_param.length; i++){
			anzeigen = document.createElement('article');
      		anzeigen_titel = document.createElement('h2');
			anzeigen_titel.textContent = person_param[i].name;
      		anzeigen.appendChild(anzeigen_titel);
			
			anzeigen_beschreibung = document.createElement('p');
			anzeigen_beschreibung.innerHTML = "<b>Beschreibung</b>: " + person_param[i].beschreibung + "<br><b>Punkte</b>: " + person_param[i].punkte + "<br><b>Energie</b>: " + person_param[i].energie;
			anzeigen.appendChild(anzeigen_beschreibung);
			
			anzeigen_bild = document.createElement('img');
			anzeigen_bild.src = "img/" + person_param[i].bild;
			anzeigen_bild.alt = person_param[i].name;
			anzeigen_bild.title = person_param[i].name;
			anzeigen.appendChild(anzeigen_bild);
			
			html_container = document.querySelector('#container');
      		html_container.appendChild(anzeigen);
		}
    }