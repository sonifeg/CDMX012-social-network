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
  console.log(user);
};
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

const renderPost = (data, postId) => {
  const postFeedNews = document.getElementById('postFeed');
  const post = document.createElement('section');
  post.className = 'sectionContainerPost2';
  const name = document.createElement('p');
  name.className = 'usernameAllPost';
  name.textContent = data.username;
  const photo = document.createElement('img');
  photo.src = data.photo;
  photo.id = 'photo';
  const postText = document.createElement('p');
  postText.className = 'coments';
  postText.textContent = data.post;
  const likes = document.createElement('img');
  likes.setAttribute('src', './assets/likes.png');
  likes.className = 'like';
  const user = auth.currentUser;
  if (user.uid === data.uid) {
    const trash = document.createElement('img');
    trash.setAttribute('src', './assets/trash.png');
    trash.setAttribute('data-id', postId);
    trash.className = 'trash';
    trash.addEventListener('click', () => {
      deletePost(postId);
    });
    post.append(name, photo, postText, likes, trash);
  } else {
    post.append(name, photo, postText, likes);
  }
  postFeedNews.append(post);
  return postFeedNews;
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
