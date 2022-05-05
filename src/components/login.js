/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { shootIn, googleSignIn } from '../lib/firebase-auth.js';
import { onNavigate } from '../main.js';

export const login = () => {
  const shootInSection = document.createElement('section');
  shootInSection.className = 'screenJoin';
  shootInSection.id = 'shootInScreen';
  const header = document.createElement('header');
  header.className = 'header';
  const titles = document.createElement('p');
  titles.textContent = 'Shoot In';
  titles.className = 'titles';
  const imgArrowBack = document.createElement('img');
  imgArrowBack.setAttribute('src', './assets/arrow.png');
  imgArrowBack.className = 'arrowBack';
  //   imgArrowBack.id = 'aJ';
  imgArrowBack.addEventListener('click', () => {
    onNavigate('/');
  });
  // -----ELIGE CON QUE HACER LOG IN -------

  const logInWith = document.createElement('label');
  logInWith.className = 'sign';
  logInWith.textContent = 'Login with:';

  // containerIcons es contenedor del icono de Google
  const containerIcons = document.createElement('div');
  containerIcons.className = 'container';

  const iconG = document.createElement('img');
  iconG.setAttribute('src', './assets/google.png');
  iconG.addEventListener('click', (e) => {
    e.preventDefault();
    googleSignIn();
  });

  const infoForm = document.createElement('form');
  infoForm.className = 'formContainer';

  const labelMail = document.createElement('label');
  labelMail.className = 'text';
  labelMail.textContent = 'Email:';
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Example@gmail.com');
  inputEmail.setAttribute('autocomplete', 'off');
  inputEmail.className = 'inputs';
  inputEmail.id = 'email';

  const labelPassword = document.createElement('label');
  labelPassword.className = 'text';
  labelPassword.textContent = 'Password:';
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'More than 6 characters');
  inputPassword.setAttribute('autocomplete', 'off');
  inputPassword.className = 'inputs';
  inputPassword.id = 'password';
  const maskifyOff = document.createElement('img');
  maskifyOff.setAttribute('src', './assets/eye.png');
  maskifyOff.id = 'maskifyOff';
  maskifyOff.className = 'eye';
  const maskifyOn = document.createElement('img');
  maskifyOn.setAttribute('src', './assets/eye_off.png');
  maskifyOn.setAttribute('hidden', 'true');
  maskifyOn.id = 'maskifyOn';
  maskifyOn.className = 'eye';
  maskifyOff.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      maskifyOff.setAttribute('hidden', 'true');
      maskifyOn.removeAttribute('hidden');
    }
  });
  maskifyOn.addEventListener('click', () => {
    if (inputPassword.type === 'text') {
      inputPassword.type = 'password';
      maskifyOn.setAttribute('hidden', 'true');
      maskifyOff.removeAttribute('hidden');
    }
  });

  const btnInfoShootIn = document.createElement('button');
  btnInfoShootIn.className = 'btn btnsSign';
  btnInfoShootIn.id = 'submitInfoShoot';
  btnInfoShootIn.textContent = 'Login';

  btnInfoShootIn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    shootIn(email, password);
  });

  const errorMessage = document.createElement('p');
  errorMessage.className = 'messages';
  errorMessage.id = 'pError';

  const divContainer = document.createElement('div');
  divContainer.className = 'pinkContainer';

  const divFooter = document.createElement('div');
  divFooter.className = 'containerFooter';

  const labelHaveAcc = document.createElement('footer');
  labelHaveAcc.className = 'sign';
  labelHaveAcc.textContent = 'Dont have an account?';

  const btnRefJoinUs = document.createElement('a');
  btnRefJoinUs.className = 'btnRefLogin';
  btnRefJoinUs.id = 'refJoinUs';
  btnRefJoinUs.textContent = 'Register';

  btnRefJoinUs.addEventListener('click', () => {
    onNavigate('/register');
  });

  divContainer.append(logInWith, containerIcons, infoForm, btnInfoShootIn);
  header.append(imgArrowBack, titles);
  containerIcons.appendChild(iconG);
  infoForm.append(labelMail, inputEmail, labelPassword, inputPassword, maskifyOff, maskifyOn, errorMessage);
  divFooter.append(labelHaveAcc, btnRefJoinUs);
  shootInSection.append(header, divContainer, divFooter);
  return shootInSection;
};
