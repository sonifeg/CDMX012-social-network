/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {
  auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut,
} from '../firebase-imports';

export const createNewUsers = (username, email, password) => createUserWithEmailAndPassword(auth, email, password).then('user').catch('error');
export const shootIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const googleSignIn = () => signInWithPopup(auth, GoogleAuthProvider());
export const logOut = () => signOut(auth);
