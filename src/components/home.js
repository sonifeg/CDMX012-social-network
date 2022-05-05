/* eslint-disable import/no-cycle */
/* ------ AQUI VAN ELEMENTOS PARA CREAR POST------ */
import { userInfo } from '../lib/firebase-users.js';
import { savePost, showPosts } from '../lib/firebase-posts.js';
import { logOut } from '../lib/firebase-auth.js';

document.addEventListener('DOMContentLoaded', () => {
  // console.log('works');
  showPosts();
});

export const home = () => {
  // Header section
  const newsFeedSection = document.createElement('main');
  newsFeedSection.className = 'screenNews';
  newsFeedSection.id = 'newsFeedScreen';

  const newsHeader = document.createElement('header');
  newsHeader.className = 'usernameHeader';
  const userImg = document.createElement('img');
  userImg.className = 'userImg';
  const usernameProfile = document.createElement('p');
  usernameProfile.className = 'username';
  userInfo(userImg, usernameProfile);
  const signOutButton2 = document.createElement('button');
  signOutButton2.className = 'submitPost signOut';
  signOutButton2.textContent = 'Sign Out';
  signOutButton2.addEventListener('click', () => {
    logOut();
  });

  // main section
  // Your posts
  const postSection = document.createElement('section');
  postSection.className = 'main';
  const activity = document.createElement('p');
  activity.textContent = 'Activity';
  activity.id = 'activity';
  const writeSection = document.createElement('form');
  writeSection.className = 'sectionContainerPost';
  writeSection.id = 'sectionPostWrite';
  const userImg2 = document.createElement('img');
  userImg2.className = 'userImgPost';
  const usernameProfile2 = document.createElement('p');
  usernameProfile2.className = 'usernamePost';
  userInfo(userImg2, usernameProfile2);
  const postText = document.createElement('textarea');
  postText.id = 'postText';
  postText.placeholder = 'What are you playing?';
  const submitPost = document.createElement('button');
  submitPost.id = 'submitPost';
  submitPost.className = 'submitPost';
  submitPost.textContent = 'Post';
  submitPost.addEventListener('click', (e) => {
    e.preventDefault();
    const post = document.getElementById('postText').value;
    savePost(post);
    writeSection.reset();
  });

  // post feed
  const postFeed = document.createElement('section');
  postFeed.id = 'postFeed';
  // showPosts();

  // Footer
  const footerMeet = document.createElement('footer');
  footerMeet.className = 'footer';
  const signOutButton = document.createElement('button');
  signOutButton.className = 'submitPost';
  signOutButton.textContent = 'Sign Out';
  signOutButton.addEventListener('click', () => {
    logOut();
  });

  // appends
  newsHeader.append(userImg, usernameProfile, signOutButton2);
  postSection.append(activity, writeSection, postFeed);
  writeSection.append(userImg2, usernameProfile2, postText, submitPost);
  footerMeet.appendChild(signOutButton);
  newsFeedSection.append(newsHeader, postSection, footerMeet);
  return newsFeedSection;
};
