function adaptPage() {
  const windowWidth = window.innerWidth;
  const zoomLevel = windowWidth / 15;
  const mainElement = document.querySelector('.main-wrapper');
  if (mainElement) {
    mainElement.style.zoom = zoomLevel + '%';
  }
}

function jumpToContacts() {
  const text7 = document.querySelector('.text7');
  window.scrollTo({
    top: text7.offsetTop,
    left: 0,
    behavior: 'instant'
  });
}

function jumpToPortfolio() {
  const text14 = document.querySelector('.text14');
  window.scrollTo({
    top: text14.offsetTop,
    left: 0,
    behavior: 'instant'
  });
}

function jumpToServices() {
  const text26 = document.querySelector('#usligi'); // Используем ID для надежности
  window.scrollTo({
    top: text26.offsetTop,
    left: 0,
    behavior: 'instant'
  });
}

function jumpToAbout() {
  const text4 = document.querySelector('.text4');
  window.scrollTo({
    top: text4.offsetTop,
    left: 0,
    behavior: 'instant'
  });
}

function jumpToSkills() {
  const text13 = document.querySelector('.text13');
  window.scrollTo({
    top: text13.offsetTop,
    left: 0,
    behavior: 'instant'
  });
}

// Инициализация при загрузке
window.addEventListener('load', () => {
  adaptPage();
  document.querySelector('.text1').addEventListener('click', jumpToServices);
  document.querySelector('.text2').addEventListener('click', jumpToPortfolio);
  document.querySelector('.text3').addEventListener('click', jumpToContacts);
  document.querySelector('.text17').addEventListener('click', jumpToAbout);
  document.querySelector('.text18').addEventListener('click', jumpToSkills);
  document.querySelector('.text19').addEventListener('click', jumpToContacts);
});

// Обновляем масштаб при изменении размера окна
window.addEventListener('resize', adaptPage);