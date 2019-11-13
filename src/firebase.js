import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyABRWv2angisVniN6BnO1w7MVPqzm_MKhk",
  authDomain: "interests-blog-514a0.firebaseapp.com",
  databaseURL: "https://interests-blog-514a0.firebaseio.com",
  projectId: "interests-blog-514a0",
  storageBucket: "interests-blog-514a0.appspot.com",
  messagingSenderId: "236211939190",
  appId: "1:236211939190:web:5592a22fbc6defcca97c57",
  measurementId: "G-63V41Q63BB"
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.EmailAuthProvider();

export const firestore = firebase.firestore();

export default firebase;
