//  übernommen aus dem 3. Semester HS 2020 von
// «finale_Version_ausfuehrlich_kommentiert»
// nur noch wenige Funktionen, leicht modifiziert
// Variablennamen angepasst
// Online-Bedingung Zeilen 26-33 eingefügt 


// !!!!!!!!!! Wird beim laden der Seite ausgeführt !!!!!!!!!!

// Aufruf der Funktion start()
start();



/* ** Funktion: start() **
* Beschreibung
*   Holt mit fetch() aus "system/ajax/holeAllePokemon.php"
*   alle Datensätze als JSON aus der Datenbank
*	Die erhaltenen Daten werden an die Funktion
*    allePokemonAnzeigen(...) zur Darstellung weitergegeben.
*
* dann Aufruf der nächsten Funktion
*/
/* Nur wenn online auf PHP zugreifen, sonst bestehendes JSON holen */
function start(){
	if (navigator.onLine) {
		console.log("online");
		url = "system/ajax/holeAllePokemon.php";
		fetch(url)
    		.then((response) => {
      			console.log(response);
    		})
	}
	
  fetch("system/ajax/allePokemon.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      allePokemonAnzeigen(data)
    })
    .catch(function(error) {
      console.log('Error: ' + error.message);
    });
}

/* ** Funktion: allePokemonAnzeigen(...) **
* Beschreibung
*     Organisiert die Anzeige aller Fragen auf einer Seite
* Parameter
*   allePokemonObj: JS-Objekt mit allen Pokemons
*/
function allePokemonAnzeigen(allePokemonObj){
  // Seite leeren
  // HTML-Elemente in JS-Variablen speichern
	let inhalt = document.querySelector('#inhalt');
	inhalt.innerHTML = "";

  // Pokemon anzeigen
  // allePokemonObj in Schleife durchlaufen
  // bei jedem Schleifendurchlauf gibt es ein Schleifen-Objekt, in dem
  // alle Inhalte enthalten sind.
  // Bezeichner in Schleifen-Objekt -> Spaltenname der DB
  for(let i = 0; i < allePokemonObj.length; i++){
    // neues div-Element "pokemonDiv" für Pokemon
    let pokemonDiv = document.createElement('div');
    // class-Attribut für frageDiv
    pokemonDiv.setAttribute("class", "frage");
    // Aufruf der Funktion pokemonAnzeigen zur Darstellung eines Beitrags
	// in bausteine.js
    // Parameter
    //   pokemonDiv: Element, in welchem der Pokemon angezeigt werden soll
    //   allePokemonObj[i]: aktuelles Schleifen-Objekt [i] mit Inhalten
    pokemonAnzeigen(pokemonDiv, allePokemonObj[i]);
    // pokemonDiv an Seite anhängen (wird jetzt auf Seite angezeigt)
    inhalt.appendChild(pokemonDiv);
  }

}