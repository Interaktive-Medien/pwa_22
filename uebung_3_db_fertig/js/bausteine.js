//  übernommen aus dem 3. Semester HS 2020 von
// «finale_Version_ausfuehrlich_kommentiert»
// nur noch Baustein A, leicht modifiziert
// Variablennamen angepasst


// =============================================================================================
// !!!!!!!!!! Bausteine !!!!!!!!!!
// werden von Ansichten aufgerufen

// -----------------------------------------------------------------------------
// ::: Baustein A: Pokemon anzeigen

/* ** Funktion: pokemonAnzeigen(...) **
* Beschreibung
*   zeigt name, beschreibung, energie, punkte und bild der Pokemons
* Parameter
*   pokemonDiv: div-Element, in welchem der Beitrag angezeigt werden soll
*   allePokemon:  aktuelles Pokemon-Objekt mit Inhalten
*               Bezeichner in Objekt: Spaltenname der DB
*/
function pokemonAnzeigen(pokemonDiv, allePokemon){
  // löschen des aktuellen Inhalts des pokemonDiv
  pokemonDiv.innerHTML = "";
	
  // neues h2-Element "name" für Name des Pokemon
  let pokemonName = document.createElement('h2');
  // Name des Pokemon in pokemonName (h2-Element) schreiben
  pokemonName.textContent = allePokemon.name;
  // pokemonName an pokemonDiv anhängen (wird jetzt auf Seite angezeigt)
  pokemonDiv.appendChild(pokemonName);

  // neues p-Element "pokemonBeschreibung" für Beschreibung
  let pokemonBeschreibung = document.createElement('p');
  // Beschreibung des Pokemon in pokemonBeschreibung (p-Element) schreiben
  pokemonBeschreibung.textContent = allePokemon.beschreibung;
  // pokemonBeschreibung an pokemonDiv anhängen (wird jetzt auf Seite angezeigt)
  pokemonDiv.appendChild(pokemonBeschreibung);

  // neues p-Element "pokemonDetails" für für Energie und Punkte
  let pokemonDetails = document.createElement('p');
  // Energie und punkte des Pokemon in pokemonDetails (p-Element) schreiben
  pokemonDetails.textContent = "Energie: " + allePokemon.energie + ", Punkte: " + allePokemon.punkte;
  // pokemonDetails an pokemonDiv anhängen (wird jetzt auf Seite angezeigt)
  pokemonDiv.appendChild(pokemonDetails);

  // neues img-Element "pokemonBild" für Bild des pokemon
  let pokemonBild = document.createElement('img');
  // Source des Pokemon Bildes in pokemonBild (img-Element) schreiben
  pokemonBild.setAttribute("src", "img/" + allePokemon.bild);
  // pokemonBild an pokemonDiv anhängen (wird jetzt auf Seite angezeigt)
  pokemonDiv.appendChild(pokemonBild);
}