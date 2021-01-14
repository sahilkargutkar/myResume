import firebase from 'firebase';


var firebaseApp =firebase.initializeApp({
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
    apiKey: "AIzaSyDgjowi18FMLPc7r3ijw9-xTwjSPnGsVwk",
    authDomain: "my-web-portfolio-b8fea.firebaseapp.com",
    projectId: "my-web-portfolio-b8fea",
    storageBucket: "my-web-portfolio-b8fea.appspot.com",
    messagingSenderId: "4170969125",
    appId: "1:4170969125:web:e06a0ef810626a4a89cfcc",
    measurementId: "G-WW8F817MRD"
 

 
});

    var db = firebaseApp.firestore();

    export {db};