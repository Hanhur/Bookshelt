// const themeSwitcher = document.querySelector('.switcher');
// const slider = document.querySelector('.slider');

// themeSwitcher.addEventListener('click', function () {
//   toggleTheme();
// });

// function toggleTheme() {
//   const isDarkMode = themeSwitcher.classList.toggle('dark-theme');
//   const themeName = isDarkMode ? 'dark-theme' : 'light-theme';
//   applyTheme(themeName);
//   saveTheme(themeName);
// }

// function applyTheme(themeName) {
//   const themeStylesheet = document.querySelector('[title="theme"]');
//   themeStylesheet.setAttribute('href', `css/${themeName}.css`);
// }

// function saveTheme(themeName) {
//   localStorage.setItem('theme', themeName);
// }

// const activeTheme = localStorage.getItem('theme');
// if (activeTheme) {
//   themeSwitcher.classList.add(activeTheme);
//   applyTheme(activeTheme);
// }

const themeSwitcher = document.querySelector('.switcher');

themeSwitcher.addEventListener('click', toggleTheme);

function toggleTheme() {
  document.body.classList.toggle('dark');
  const elements = document.querySelectorAll(
    '.slider, .general-header, .header-logo-icon, .gallery-heading, .see-more, .gallery-books-title, .shopping-title, .choosenbook-title, .choosenbook-descr, .icon-open, .categories-link, .header-shopping-text, .book-modal, .close-icon, .add-btn, .choosenbook-popup-title, .choosenbook-popup-descr, .icon-untitled-header, .mob-menu-leveling'
  );
  elements.forEach(function (element) {
    if (document.body.classList.contains('dark')) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  });
  saveTheme(document.body.classList.contains('dark') ? 'dark' : 'light');
}

function saveTheme(themeName) {
  localStorage.setItem('theme', themeName);
}

const activeTheme = localStorage.getItem('theme');
if (activeTheme === 'dark') {
  document.body.classList.add('dark');
  const elements = document.querySelectorAll(
    '.slider, .general-header, .header-logo-icon, .gallery-heading, .see-more, .gallery-books-title, .shopping-title, .choosenbook-title, .choosenbook-descr, .icon-open, .categories-link, .header-shopping-text, .book-modal, .close-icon, .add-btn, .choosenbook-popup-title, .choosenbook-popup-descr, .icon-untitled-header, .mob-menu-leveling'
  );
  elements.forEach(function (element) {
    element.classList.add('dark');
  });
} else {
  // Зміна: Не виконувати жодних дій, якщо активна тема не встановлена
}
