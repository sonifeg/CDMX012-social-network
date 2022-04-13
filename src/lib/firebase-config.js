/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp, getAuth, getFirestore } from './firebase-imports.js';

// Your web app's Firebase configuration
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR5IRyDbhK8r5aNUQ55fXmycKTlssTonk",
  authDomain: "prueba-post-7060e.firebaseapp.com",
  projectId: "prueba-post-7060e",
  storageBucket: "prueba-post-7060e.appspot.com",
  messagingSenderId: "1029876398681",
  appId: "1:1029876398681:web:eb79bee7b96ddf07710f48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
