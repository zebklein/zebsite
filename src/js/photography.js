const slides = document.querySelectorAll('.slide');
const total = slides.length;
let current = 0;

document.getElementById('slide-total').textContent = total;

function goTo(n) {
  slides[current].classList.remove('active');
  current = (n + total) % total;
  slides[current].classList.add('active');
  document.getElementById('slide-current').textContent = current + 1;
}

document.querySelector('.prev').addEventListener('click', () => goTo(current - 1));
document.querySelector('.next').addEventListener('click', () => goTo(current + 1));

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') goTo(current - 1);
  if (e.key === 'ArrowRight') goTo(current + 1);
});
