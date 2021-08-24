// Folgt folgendem Tutoral:
// https://www.itwonders-web.com/blog/push-notification-using-firebase-demo-tutorial
// WICHTIG: es braucht die Datei firebase-messaging-sw.js, 
// welche in der Root (d.h. Ordner web) des Servers liegen muss (also nicht im einnen Unterverzeichnis)

importScripts("https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

// Anpassen!
firebase.initializeApp({
    apiKey: "wie in index.html",
    authDomain: "wie in index.html",
    projectId: "wie in index.html",
    storageBucket: "wie in index.html",
    messagingSenderId: "wie in index.html",
    appId: "wie in index.html"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});