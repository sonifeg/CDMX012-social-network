/* eslint-disable import/no-cycle */
import { auth } from '../lib/firebase-config.js';
import { deletePost, catchPostToEdit, editPost } from '../lib/firebase-posts.js';

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

const openEditModal = (postId) => {
  const postFeedNews = document.getElementById('postFeed');
  const modal = document.createElement('section');
  modal.id = 'editModal';
  const text = document.createElement('p');
  text.className = 'editText';
  text.textContent = 'Do you want to edit this post?';
  const inputValue = document.createElement('textArea');
  inputValue.id = 'inputValueEdit';
  catchPostToEdit(postId);
  const btnEdit = document.createElement('button');
  btnEdit.className = 'submitPost btnModal';
  btnEdit.textContent = 'Edit';
  btnEdit.addEventListener('click', (e) => {
    e.preventDefault();
    editPost(postId);
  });
  const btnCancel = document.createElement('button');
  btnCancel.textContent = 'Cancel';
  btnCancel.className = 'submitPost btnModal';
  btnCancel.addEventListener('click', () => {
    postFeedNews.removeChild(modal);
  });
  modal.append(text, inputValue, btnEdit, btnCancel);
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
      openEditModal();
    });
    post.append(name, photo, postText, likes, trash, edit);
  } else {
    post.append(name, photo, postText, likes);
  }
  postFeedNews.append(post);
  return postFeedNews;
};
