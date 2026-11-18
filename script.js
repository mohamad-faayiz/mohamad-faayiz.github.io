// Small, dependency-free enhancements for the portfolio.
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

function setTheme(theme) {
  root.dataset.theme = theme;
  themeIcon.textContent = theme === 'dark' ? '☼' : '☾';
  themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  try { localStorage.setItem('portfolio-theme', theme); } catch (_) { /* Storage may be blocked. */ }
}

let savedTheme = 'dark';
try { savedTheme = localStorage.getItem('portfolio-theme') || 'dark'; } catch (_) { /* Ignore storage restrictions. */ }
setTheme(savedTheme === 'light' ? 'light' : 'dark');
themeToggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

const menuButton = document.getElementById('menu-toggle');
const navigation = document.getElementById('main-navigation');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
}));

const projectCards = Array.from(document.querySelectorAll('.project-card'));
document.querySelectorAll('.filter-chip').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-chip').forEach(chip => {
      const selected = chip === button;
      chip.classList.toggle('active', selected);
      chip.setAttribute('aria-pressed', String(selected));
    });
    projectCards.forEach(card => {
      card.hidden = filter !== 'all' && !card.dataset.categories.split(' ').includes(filter);
    });
  });
});

document.getElementById('current-year').textContent = new Date().getFullYear();

// Disable placeholder contact buttons so visitors never reach dummy destinations.
for (const id of ['email-link', 'github-link', 'linkedin-link']) {
  const link = document.getElementById(id);
  if (/YOUR_EMAIL|YOUR_USERNAME|YOUR_PROFILE/.test(link.getAttribute('href'))) {
    link.removeAttribute('href');
    link.removeAttribute('target');
    link.setAttribute('aria-disabled', 'true');
    link.title = 'Update this link in index.html before publishing';
    link.style.opacity = '.48';
    link.style.cursor = 'not-allowed';
  }
}
