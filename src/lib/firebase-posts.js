import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from './firebase-imports.js';
import { auth, db } from './firebase-config.js';

export const savePost = (post) => {
  const user = auth.currentUser;
  const date = new Date();
  addDoc(collection(db, 'posts'), {
    username: user.displayName,
    photo: user.photoURL,
    date,
    post,
  });
};

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

export async function showPosts() {
  const q = await query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((post) => {
      const postDocs = post.data();
      console.log(postDocs.date);
      renderPost(postDocs);
    });
  });
}
