<!DOCTYPE html>
<html lang="en">
	<!-- leicht verändert übernommen aus dem 3. Semester HS 2020 von
	«finale_Version_ausfuehrlich_kommentiert» -->
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Darstellung aller Pokemon">
	<!-- #3: Hintergrundfarbe für iOS -->
		<meta name="theme-color" content="#FF9800">
	<!-- Ende #3: Hintergrundfarbe für iOS -->
  <!-- #1: Manifest. Dieses muss in der Root liegen -->
   <link rel="manifest" href="manifest.json">
 <!-- Ende #1: Manifest -->

 <!-- #4: Home Screen für iOS-->
   <!-- für iOS, welches Manifest nicht unterstützt, https://webkit.org/status/#?search=manifest -->
   <link rel="icon" sizes="128x128" href="icons/hello-icon-128.png">
   <link rel="apple-touch-icon" sizes="128x128" href="icons/hello-icon-128.png">
   <link rel="icon" sizes="192x192" href="/icons/hello-icon-192.png">
   <link rel="apple-touch-icon" sizes="192x192" href="icons/hello-icon-192.png">
   <link rel="icon" sizes="256x256" href="icons/hello-icon-256.png">
   <link rel="apple-touch-icon" sizes="256x256" href="/icons/hello-icon-256.png">
   <link rel="icon" sizes="512x512" href="icons/hello-icon-512.png">
   <link rel="apple-touch-icon" sizes="512x512" href="icons/hello-icon-512.png">
 <!-- Ende #4: Home Screen für iOS-->

 <!-- #2: Service-Worker Registrierung für Advanced Caching -->
 <script type="module">
   import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';
   const el = document.createElement('pwa-update');
   document.body.appendChild(el);
 </script>
 <!-- Ende #2: Service-Worker Registrierung für Advanced Caching -->

 <!-- #5: Skript für Install-Button --><!-- https://components.pwabuilder.com/component/install_pwa -->
   <script type="module" src="https://cdn.jsdelivr.net/npm/@pwabuilder/pwainstall"></script>
 <!-- #5: Ende Skript für Install-Button -->
  <title>PWA FDB Pokemon</title>
  <link rel="stylesheet" href="css/style.css" >
</head>
<body>
  <!-- #6: Ort des Install-Buttons -->
  <pwa-install>Installieren</pwa-install>
<!-- Ende #6: Ort des Install-Buttons -->
	<div class="container">
		<h1 id="ueberschrift">alle Pokemon</h1>
		<div id="inhalt"></div>
	</div>

  <script src="js/bausteine.js"></script>
  <script src="js/script.js"></script>
</body>
</html>