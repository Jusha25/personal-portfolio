const hamburger = document.querySelector('.hamburger');
const rightnav = document.querySelector('.right-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  rightnav.classList.toggle('active');
});

document.querySelectorAll('.nav-link').foreach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    rightnav.classList.remove('active');
  })
);
