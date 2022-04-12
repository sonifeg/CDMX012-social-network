/* eslint-disable prefer-const */
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  getDocs,
} from './firebase-imports.js';
import { auth, db } from './firebase-config.js';
// import { async } from 'regenerator-runtime';

export const savePost = (post) => {
  const user = auth.currentUser;
  const date = new Date();
  addDoc(collection(db, 'posts'), {
    uid: user.uid,
    email: user.email,
    username: user.displayName,
    photo: user.photoURL,
    date,
    post,
  });
  // .then((e) => {
  //   e.preventDefault();
  // // eslint-disable-next-line no-param-reassign
  //   const postAreaClean = document.getElementById('postText').value;
  //   postAreaClean.innerHtml = '';
  // });
};

// export async function savePost() {
//   const user = auth.currentUser;
//   const date = new Date();
//   const post = document.getElementById('postText').value;
//   try {
//     const docRef = doc(collection(db, 'posts'));
//     const datapost = {
//       idDocument: docRef.id,
//       uid: user.uid,
//       username: user.displayName,
//       photo: user.photoURL,
//       date,
//       post,
//     };
//     await setDoc(docRef, datapost);
//   } catch (e) {
//     console.error('Error addind document: ', e);
//   }
// }

const renderPost = (data) => {
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
  const trash = document.createElement('img');
  trash.setAttribute('src', './assets/trash.png');
  trash.className = 'trash';
  post.append(name, photo, postText, likes, trash);
  postFeedNews.append(post);
  return postFeedNews;
};

export const showPosts = () => {
  const q = query(collection(db, 'posts'), orderBy('date', 'desc'));

  onSnapshot(q, (querySnapshot) => {
    document.getElementById('postFeed').innerHTML = '';
    let postsInfo = [];
    querySnapshot.docs.forEach((doc) => {
      postsInfo.push({ ...doc.data(), id: doc.id });
      renderPost(doc.data());
    });
    console.log(postsInfo);
  });
};
// showPosts();

// export async function showPosts() {
//   const q = await query(collection(db, 'posts'), orderBy('date', 'desc'));
//   onSnapshot(q, (querySnapshot) => {
//     // let postsInfo = [];
//     querySnapshot.docs.forEach((post) => {
//       // postsInfo.push({ ...post.data() });
//       const postDocs = post.data();
//       // console.log(postDocs.date);
//       //console.log(postDocs);
//       renderPost(postDocs);
//     });
//   });
// }
