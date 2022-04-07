/* eslint-disable consistent-return */
/* eslint-disable import/named */
import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
} from './firebase-imports.js';
import { auth, db } from './firebase-config.js';

export const savePost = (post, date) => {
  // const user = auth.currentUser;
  // addDoc(collection(db, 'posts'), {
  //   username: user.displayName,
  //   post,
  // });
  const user = auth.currentUser;
  if (user) {
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;
    const photo = user.photoURL;

    return addDoc(collection(db, 'posts'), {
      post,
      date,
      uid,
      displayName,
      email,
      photo,
    });
  }
};

export const getPost = () => {
  const posts = collection(db, 'posts');
  getDocs(posts)
    .then((snapshot) => {
      let postsInfo = [];
      snapshot.docs.forEach((doc) => {
        postsInfo.push({ ...doc.data(), id: doc.id });
      });
      console.log(postsInfo);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
