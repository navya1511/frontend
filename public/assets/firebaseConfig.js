// const firebaseConfig = {
//     apiKey: "AIzaSyD1cz8jz01RqI0xsdAhFz7qmTyyyrXI6r4",
//     authDomain: "fraud-detect.firebaseapp.com",
//     projectId: "fraud-detect",
//     storageBucket: "fraud-detect.appspot.com",
//     messagingSenderId: "1044899339077",
//     appId: "1:1044899339077:web:e0d07fe2893d6d2347bc2c",
//     measurementId: "G-6Q22KE8GNL"
// };

// const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCurWuMY234ccOZYOxH5m8ImxycFzAofFw",
  authDomain: "fraud-detection-dd30e.firebaseapp.com",
  projectId: "fraud-detection-dd30e",
  storageBucket: "fraud-detection-dd30e.appspot.com",
  messagingSenderId: "518676282402",
  appId: "1:518676282402:web:bab0fb35b0bb6d9dc11e7b",
  measurementId: "G-S93E519FXH"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = firebase.auth(app);