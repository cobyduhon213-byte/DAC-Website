const toggle = document.getElementById('navToggle');
const nav = document.getElementById('primaryNav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.navitem > button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (window.innerWidth <= 980) {
      e.preventDefault();
      btn.parentElement.classList.toggle('expanded');
    }
  });
});
document.querySelectorAll('nav.primary a').forEach(a => {
  a.addEventListener('click', () => { nav.classList.remove('open'); });
});
