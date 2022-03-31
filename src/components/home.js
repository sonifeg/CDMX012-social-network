/* ------ AQUI VAN ELEMENTOS PARA CREAR POST------ */
// import { onNavigate } from '../main.js';

export const home = () => {
  const newsFeedSection = document.createElement('section');
  newsFeedSection.className = 'screenNews';
  newsFeedSection.id = 'newsFeedScreen';
  const newsHeader = document.createElement('header');
  newsHeader.className = 'headerNews';
  // const userNameSection = document.createElement('div');
  // userNameSection.className = 'divContainerHome';
  const userImg = document.createElement('img');
  userImg.setAttribute('src', './assets/fotoperfil.png');
  userImg.className = 'userImg';
  const usernameName = document.createElement('p');
  usernameName.textContent = 'T-Rex';// nombre de usuario
  usernameName.className = 'usernameName';
  const principal = document.createElement('main');
  principal.className = 'main';
  const activity = document.createElement('p');
  activity.textContent = 'Activity';
  activity.className = 'activity';
  const divContainerPost = document.createElement('div');
  divContainerPost.className = 'divContainerPost';
  const userImg2 = document.createElement('img');
  userImg2.setAttribute('src', './assets/fotoperfil.png');
  userImg2.className = 'userImg';
  const postText = document.createElement('input');
  postText.setAttribute('type', 'text');
  postText.setAttribute('placeholder', 'What are you thinking?');
  postText.id = 'postText';
  const submitPost = document.createElement('button');
  submitPost.id = 'submitPost';
  submitPost.textContent = 'Post';

  principal.appendChild(divContainerPost);
  divContainerPost.append(userImg2, postText, submitPost);
  // userNameSection.append(userImg, usernameName);
  newsHeader.append(userImg, usernameName);
  principal.appendChild(activity);
  newsFeedSection.append(newsHeader, principal);

  return newsFeedSection;
};
