/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const initializeApp = (firebaseConfig) => ({});
const firebaseConfig = ({});
const getAuth = (app) => Promise.resolve({});
const getFirestore = (app) => Promise.resolve({});

export const createUserWithEmailAndPassword = (auth, email, password) => Promise.resolve({});
export const signInWithEmailAndPassword = (auth, email, password) => Promise.resolve({});
export class GoogleAuthProvider {}
export const signInWithPopup = (auth, providerGoogle) => Promise.resolve({});
export const collection = (db, posts) => Promise.resolve({});
export const addDoc = (collection) => ({});
export const query = (collection, orderBy) => Promise.resolve({});
export const onSnapshot = (q, querySnapshot) => Promise.resolve({});
export const orderBy = (date, desc) => Promise.resolve({});
export const doc = (db, post, id) => ({ db, post, id });
export const deleteDoc = (doc) => Promise.resolve({});
export const signOut = (auth) => Promise.resolve({});

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
