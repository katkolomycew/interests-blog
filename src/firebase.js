import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// Basic firebase configuration linking web application to database - see firebase documentation
const firebaseConfig = {
  apiKey: "AIzaSyABRWv2angisVniN6BnO1w7MVPqzm_MKhk",
  authDomain: "interests-blog-514a0.firebaseapp.com",
  databaseURL: "https://interests-blog-514a0.firebaseio.com",
  projectId: "interests-blog-514a0",
  storageBucket: "interests-blog-514a0.appspot.com",
  messagingSenderId: "236211939190",
  appId: "1:236211939190:web:5592a22fbc6defcca97c57",
  measurementId: "G-63V41Q63BB"
};

// Initialising firebase
firebase.initializeApp(firebaseConfig);

// Exporting connection to database as a variable
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
