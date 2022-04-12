/* eslint-disable import/no-cycle */
/* eslint-disable prefer-const */
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from './firebase-imports.js';
import { auth, db } from './firebase-config.js';
import { renderPost } from '../components/posts.js';

export const savePost = (post) => {
  const user = auth.currentUser;
  const date = new Date();
  const docRef = collection(db, 'posts');
  addDoc(collection(db, 'posts'), {
    uid: user.uid,
    ID: docRef.id,
    email: user.email,
    username: user.displayName,
    photo: user.photoURL,
    date,
    post,
  });
};

export const showPosts = () => {
  const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    document.getElementById('postFeed').innerHTML = '';
    querySnapshot.forEach((docs) => {
      const ID = docs.id;
      renderPost(docs.data(), ID);
    });
  });
};

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
