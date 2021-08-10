# Progressive Web-Apps
Repository für den Progressive Web-App Code im Grundast der Interaktiven Medien. 
Progressive Web-Apps (PWA) sind normale Websites basierend auf HTML, CSS, Javascript, MySQL und PHP. Die Websites sind angereichert durch die Möglichkeit, dass sie auf dem Smartphone (oder Desktop) installiert werden können. Dabei werden die Inhalte (wie Bilder, Stylesheet etc.) auch lokal gespeichert. Das heisst, die PWA können auch offline (d.h. ohne Internetverbindung) genutzt werden.
## Zentrale Komponenten
- Um Progressive Web-Apps auf einem Endgerät zu installieren wird eine manifest.json-Datei benötigt, die im head-Bereich der Startseite der PWA verlinkt sein muss. Die Manifest-Datei enthält alle Informationen über die App, die benötigt werden, um die PWA erfolgreich zu installieren. Dazu gehören Name, App-Icons und der Pfad zur Startdatei der PWA.
- Ein Service-Worker ist JavaScript-Code, der separat vom Browser im Hintergrund ausgeführt werden kann. Es handelt sich im Wesentlichen um eine JavaScript-Datei, die separat vom Hauptbrowser-Thread ausgeführt wird, Netzwerkanforderungen abfängt, Ressourcen zwischenspeichert oder aus dem Cache abruft und Push-Nachrichten übermittelt. Da Worker getrennt vom Hauptthread ausgeführt werden, sind Service-Worker unabhängig von der Anwendung, der sie zugeordnet sind. Die wesentlichen Elemente des Service-Workers sind bei <a href="https://developer.mozilla.org/en-US/docs/Web/API/Request/destination" target="_blank">Mozilla</a> beschrieben.
## Ordner «beispiel»
Dieser Ordner ist die Ausgangslage für das Selbststudium. Es handelt sich um eine validierte, responsive Website. Sie muss im Selbststudium in eine PWA umgewandelt werden. Zu Anschaungszwecken steht die Ausgangslage auch <a href="https://537449-52.web1.fh-htwchur.ch/beispiel/" target="_blank">im Netz</a> zur Verfügung.
## Ordner «beispiel_fertig»
Dieser Ordner ist das fertig umgewandelte PWA. Zu Anschaungszwecken steht die Lösung auch <a href="https://537449-52.web1.fh-htwchur.ch/beispiel_fertig/" target="_blank">im Netz</a> zur Verfügung.
## Ordner «beispiel_hilfsdateien»
In diesem Ordner befinden sich einige Dateien, welche  für die Umwandlung der Websote in eine PWA benötigt werden.
## Ordner «uebung_1_coffee»
Die erste Übung innerhalb der <b>Blockwoche</b> ist eine Repetition des grundsätzlichen Vorgehens zur Erstellung einer PWA. Sie finden in der <a href="https://moodle.fhgr.ch/mod/resource/view.php?id=402370" target="_blank">PDF der Übungs-Datei</a> die einzelnen Schritte beschrieben. Zu Anschaungszwecken steht die Ausgangslage auch <a href="https://537449-52.web1.fh-htwchur.ch/uebung_1_coffee/" target="_blank">im Netz</a> zur Verfügung.
## Ordner «uebung_1_coffee_fertig»
Dieser Ordner ist das fertig umgewandelte PWA. Zu Anschaungszwecken steht die Lösung auch <a href="https://537449-52.web1.fh-htwchur.ch/uebung_1_coffee_fertig/" target="_blank">im Netz</a> zur Verfügung.
## Ordner «uebung_2_json»
In der zweiten Übung innerhalb der <b>Blockwoche</b> soll zuerst eine einfache Website mit Flexboxen gebaut werden. Die Inhalte stammen aus einer gegebenen JSON-Datei. Anschliessend wird das PWA eingebaut.
## Ordner «uebung_2_json_fertig»
Dieser Ordner ist das fertig umgewandelte PWA. Zu Anschaungszwecken steht die Lösung auch <a href="https://537449-52.web1.fh-htwchur.ch/uebung_2_json_fertig/" target="_blank">im Netz</a> zur Verfügung.
## Ordner «uebung_3_db»
In der dritten Übung innerhalb der <b>Blockwoche</b> greifen wir auf eine Datenbank zu. Die Datei <i>Datenbank_pokemon.sql</i> beinhaltet die zu importierenden Daten.<br>
Das Vorgehen ist identisch mit dem Beispiel <a href="https://github.com/WolfgangBock/backend_technologien" target="_blank">«finale_Version_ausfuehrlich_kommentiert»</a> des 3. Semesters. Machen Sie sich zuerst wieder mit dem Zusammenspiel der Dateien und Funktionen vertraut. Anschliessend löschen Sie alle überflüssigen Dateien und Funktionen. Es werden nur Inhalte der Datenbank angezeigt. Funktionen für Buttons, das Login, Hinzufügen, Bearbeiten und Löschen von Datensätzen braucht es nicht. Es sollen nur Datensätze angezeigt werden.
## Ordner «uebung_3_db_fertig»
Dieser Ordner ist das fertig umgewandelte PWA der Datenbank. Zu Anschaungszwecken steht die Lösung auch <a href="https://537449-52.web1.fh-htwchur.ch/uebung_3_db_fertig/" target="_blank">im Netz</a> zur Verfügung.