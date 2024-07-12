// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZYYpZm0SzMlWpx1BmKIaS_efeRHffdBs",
  authDomain: "logandbackend.firebaseapp.com",
  databaseURL: "https://logandbackend-default-rtdb.firebaseio.com",
  projectId: "logandbackend",
  storageBucket: "logandbackend.appspot.com",
  messagingSenderId: "553097454929",
  appId: "1:553097454929:web:b9e8278cae2d4654a0df70",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
// auth dışarıya açtık çağrılan componente kullanılır.
export { auth };
