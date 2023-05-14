import createHomepage from './homepage';
import createMenuPage from './menu';
import createContactPage from './Contact';

const contentContainer = document.querySelector('#content');
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const contactBtn = document.querySelector('#contact-btn');

function clearPage() {
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }
}

function setNavColour(name) {
  homeBtn.classList = 'hover:text-lime-700 underline';
  menuBtn.classList = 'hover:text-lime-700 underline';
  contactBtn.classList = 'hover:text-lime-700 underline';
  if (name === 'home') homeBtn.classList = 'hover:text-lime-700 text-lime-900 underline';
  if (name === 'menu') menuBtn.classList = 'hover:text-lime-700 text-lime-900 underline';
  if (name === 'contact') contactBtn.classList = 'hover:text-lime-700 text-lime-900 underline';
}

function addEventsToNav() {
  homeBtn.addEventListener('click', () => {
    clearPage();
    createHomepage();
    setNavColour('home');
  });

  menuBtn.addEventListener('click', () => {
    clearPage();
    createMenuPage();
    setNavColour('menu');
  });

  contactBtn.addEventListener('click', () => {
    clearPage();
    createContactPage();
    setNavColour('contact');
  });
}

addEventsToNav();
createHomepage();
