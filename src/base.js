import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";
import Rebase from "re-base";
const firebaseConfig = {
  apiKey: "AIzaSyBpPScP0iOqlN_YZv_svCqHOdoinGknBfM",
  authDomain: "mercadodev-d05fb.firebaseapp.com",
  databaseURL: "https://mercadodev-d05fb.firebaseio.com",
  projectId: "mercadodev-d05fb",
  storageBucket: "gs://mercadodev-d05fb.appspot.com",
  messagingSenderId: "774547597299",
  appId: "1:774547597299:web:e3c298db76d7e3fd67d486",
};

const app = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(app.database());
export const storage = app.storage();
export default base;
