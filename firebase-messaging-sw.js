// Folgt folgendem Tutoral:
// https://www.itwonders-web.com/blog/push-notification-using-firebase-demo-tutorial
// WICHTIG: es braucht die Datei firebase-messaging-sw.js, 
// welche in der Root (d.h. Ordner web) des Servers liegen muss (also nicht im einnen Unterverzeichnis)

importScripts("https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js");

// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId. Muss auch in firebase-messaging-sw.js angepasst werden

firebase.initializeApp({
		apiKey: "AIzaSyBDLy2S0CVcYgMe8jpaIuTuw8qFOY9c7xY",
		authDomain: "pwa-notification-imv.firebaseapp.com",
		projectId: "pwa-notification-imv",
		storageBucket: "pwa-notification-imv.appspot.com",
		messagingSenderId: "490824365455",
		appId: "1:490824365455:web:48e1d8f6a6119893d707fa"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
//const messaging = firebase.messaging();

const messaging = firebase
  .messaging()
  .usePublicVapidKey(
    "BIgj8XGJRFQkrUq2RJP6n-2LKmoQDvRT_yDCvTsvk1AC_tHKCCGp6iWtd5KsfzCW8sKdZ8rNXtQefLECmvUxF-A"
  );

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
