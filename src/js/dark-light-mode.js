const themeSwitcher = document.querySelector('.switcher');
const slider = document.querySelector('.slider');

themeSwitcher.addEventListener('click', function () {
  toggleTheme();
});

function toggleTheme() {
  const isDarkMode = themeSwitcher.classList.toggle('dark-theme');
  const themeName = isDarkMode ? 'dark-theme' : 'light-theme';
  applyTheme(themeName);
  saveTheme(themeName);
}

function applyTheme(themeName) {
  const themeStylesheet = document.querySelector('[title="theme"]');
  themeStylesheet.setAttribute('href', `css/${themeName}.css`);
}

function saveTheme(themeName) {
  localStorage.setItem('theme', themeName);
}

const activeTheme = localStorage.getItem('theme');
if (activeTheme) {
  themeSwitcher.classList.add(activeTheme);
  applyTheme(activeTheme);
}
