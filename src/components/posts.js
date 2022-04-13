/* eslint-disable import/no-cycle */
import { auth } from '../lib/firebase-config.js';
import { deletePost, editPost } from '../lib/firebase-posts.js';

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

const openModalEdit = () => {
  const postFeedNews = document.getElementById('postFeed');
  const modal = document.createElement('section');
  modal.id = 'deleteModal';
  const text = document.createElement('p');
  text.className = 'deleteText';
  text.textContent = 'Do you want to edit this post?';
  const inputEdition = document.createElement('input');
  inputEdition.id = 'inputEdition';
 
  const btnEdit = document.createElement('button');
  btnEdit.className = 'submitPost btnModal';
  btnEdit.textContent = 'Yes';
  btnEdit.addEventListener('click', () => {
    const postValue = document.getElementById('textComents');
    editPost(docs.id, inputEdition.value, docs.data().data);
    console.log(postValue);
  });
  const cancelEdit = document.createElement('button');
  cancelEdit.textContent = 'No';
  cancelEdit.className = 'submitPost btnModal';
  cancelEdit.addEventListener('click', () => {
    postFeedNews.removeChild(modal);
  });
  modal.append(text, inputEdition, btnEdit, cancelEdit);
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
  postText.id = 'textComents';
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
    const edit = document.createElement('img');
    edit.setAttribute('src', './assets/edit.png');
    edit.className = 'edit';
    trash.addEventListener('click', () => {
      openModal(postId);
    });
    edit.addEventListener('click', () => {
      openModalEdit();
    });
    post.append(name, photo, postText, likes, trash, edit);
  } else {
    post.append(name, photo, postText, likes);
  }
  postFeedNews.append(post);
  return postFeedNews;
};
