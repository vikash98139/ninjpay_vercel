importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyDVTUp-0zmV-0vdywqt0iCbHCCnuEsVadM",
    authDomain: "ninjapay-24b2f.firebaseapp.com",
    projectId: "ninjapay-24b2f",
    storageBucket: "ninjapay-24b2f.appspot.com",
    messagingSenderId: "223863695725",
    appId: "1:223863695725:web:a8ab50d3d2e7a1769e1264",
    measurementId: "G-K0KY1HD87S"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {});

messaging.onBackgroundMessage(function (payload) {
  console.log("this is the best solution", payload.data);

  if (payload.data) {

  console.log(payload.data);
    const notificationData = payload.data;
    const notificationTitle = notificationData.title;

    const notificationOptions = {
      body: notificationData.body
    };

    console.log(notificationTitle);
    console.log(notificationOptions);


    self.registration.showNotification(notificationTitle, notificationOptions);
  } else {
    console.log("Notification data is undefined");
  }
});