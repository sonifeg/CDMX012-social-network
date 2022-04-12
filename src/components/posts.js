/* eslint-disable import/no-cycle */
import { auth } from '../lib/firebase-config.js';
import { deletePost } from '../lib/firebase-posts.js';

const openModal = (postId) => {
  const postFeedNews = document.getElementById('postFeed');
  const modal = document.createElement('section');
  modal.id = 'deleteModal';
  const text = document.createElement('p');
  text.className = 'deleteText';
  text.textContent = 'Do you want to delete this post?';
  const btnDelete = document.createElement('button');
  btnDelete.className = 'submitPost btnModal';
  btnDelete.textContent = 'Yes';
  btnDelete.addEventListener('click', () => {
    deletePost(postId);
  });
  const btnClose = document.createElement('button');
  btnClose.textContent = 'No';
  btnClose.className = 'submitPost btnModal';
  btnClose.addEventListener('click', () => {
    postFeedNews.removeChild(modal);
  });
  modal.append(text, btnDelete, btnClose);
  postFeedNews.append(modal);
  // deletePost(postId);
};

export const renderPost = (data, postId) => {
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
      openModal(postId);
    });
    post.append(name, photo, postText, likes, trash);
  } else {
    post.append(name, photo, postText, likes);
  }
  postFeedNews.append(post);
  return postFeedNews;
};
