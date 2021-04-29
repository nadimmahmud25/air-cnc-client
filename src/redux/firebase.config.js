import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB5x8B0RVDGuuZtHjGkRBeQPPwL1wZRCUA",
  authDomain: "air-cnc-my.firebaseapp.com",
  projectId: "air-cnc-my",
  storageBucket: "air-cnc-my.appspot.com",
  messagingSenderId: "447860610327",
  appId: "1:447860610327:web:b2df1a81acaeeb521f1352"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebaseApp.auth();