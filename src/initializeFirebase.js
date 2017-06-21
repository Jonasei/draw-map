import firebase from 'firebase'

export default function initializeFirebase () {

    const config = {
        apiKey: "AIzaSyDChkm3RdqwHfcPSgGjLbmH-OXw8yO_Idw",
        authDomain: "drawmap-e05ed.firebaseapp.com",
        databaseURL: "https://drawmap-e05ed.firebaseio.com",
        projectId: "drawmap-e05ed",
        storageBucket: "drawmap-e05ed.appspot.com",
        messagingSenderId: "151785382286"
    };

    firebase.initializeApp(config); 
}