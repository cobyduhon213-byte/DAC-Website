const toggle = document.getElementById('navToggle');
const nav = document.getElementById('primaryNav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
// Top tabs are links. On mobile, tapping the little arrow opens the submenu; tapping the label goes to the page.
document.querySelectorAll('.navitem > a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 980 && e.target.closest('svg')) {
      e.preventDefault();
      e.stopImmediatePropagation();
      link.parentElement.classList.toggle('expanded');
    }
  });
});
document.querySelectorAll('nav.primary a').forEach(a => {
  a.addEventListener('click', () => { nav.classList.remove('open'); });
});
