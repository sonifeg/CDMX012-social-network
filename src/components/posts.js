/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import { auth } from '../lib/firebase-config.js';
import { deletePost, editPost } from '../lib/firebase-posts.js';
import { doc } from '../lib/firebase-imports.js';

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
};

export const renderPost = (data, postId) => {
  const postFeedNews = document.getElementById('postFeed');
  const post = document.createElement('section');
  post.className = 'sectionContainerPost2';
  post.setAttribute('id', doc.id);
  const name = document.createElement('p');
  name.className = 'usernameAllPost';
  name.textContent = data.username;
  const photo = document.createElement('img');
  photo.src = data.photo;
  photo.id = 'photo';
  const postText = document.createElement('p');
  postText.className = 'coments';
  postText.textContent = data.post;
  post.id = 'textPostValue';

  const numberLikes = document.createElement('input');
  numberLikes.className = 'numberLikes';
  numberLikes.id = 'numberLikes';
  numberLikes.value = '0';

  const likes = document.createElement('img');
  likes.setAttribute('src', './assets/likes.png');
  likes.className = 'like';
  likes.id = 'likes';
  likes.addEventListener('click', () => {
    numberLikes.value = parseInt(numberLikes.value, 10) + 1;
    console.log('it works!');
  });

  const user = auth.currentUser;
  if (user.uid === data.uid) {
    const trash = document.createElement('img');
    trash.setAttribute('src', './assets/trash.png');
    trash.setAttribute('data-id', postId);
    trash.className = 'trash';
    const edit = document.createElement('img');
    edit.setAttribute('src', './assets/edit.png');
    edit.className = 'edit';
    trash.addEventListener('click', () => {
      openModal(postId);
    });
    edit.addEventListener('click', () => {
      if (edit) {
        post.removeChild(postText);
        const newContainer = document.createElement('div');
        newContainer.setAttribute('id', 'newConteiner');
        newContainer.className = 'newContainer';
        const inputNewValue = document.createElement('input');
        inputNewValue.id = 'inputNewValue';
        inputNewValue.setAttribute('type', 'text');
        inputNewValue.setAttribute('placeholder', data.post);
        const btnSaveData = document.createElement('button');
        btnSaveData.id = 'saveData';
        btnSaveData.textContent = 'Edit';
        newContainer.append(inputNewValue, btnSaveData);
        post.appendChild(newContainer);

        btnSaveData.addEventListener('click', () => {
          const newPostValue = inputNewValue.value;
          console.log(newPostValue);
          // post.append(newContainer);
          editPost(postId, newPostValue);
          console.log(editPost);
        });
      }
    });
    post.append(name, photo, postText, likes, numberLikes, trash, edit);
  } else {
    post.append(name, photo, postText, likes, numberLikes);
  }
  postFeedNews.append(post);
  return postFeedNews;
};

const postLikes = () => {
  const likes = document.querySelectorAll('.like');
  likes.forEach((like) => {
    like.addEventListener('click', (e) => {
      e.target;
    });
  });
};
