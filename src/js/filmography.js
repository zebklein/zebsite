const modal = document.getElementById('film-modal');
const player = document.getElementById('film-player');
const backdrop = modal.querySelector('.film-modal-backdrop');
const closeBtn = modal.querySelector('.film-modal-close');

function openFilm(src) {
  player.src = src;
  modal.hidden = false;
  player.play();
}

function closeFilm() {
  modal.hidden = true;
  player.pause();
  player.src = '';
}

document.querySelectorAll('.film-icon').forEach(btn => {
  btn.addEventListener('click', () => openFilm(btn.dataset.src));
});

backdrop.addEventListener('click', closeFilm);
closeBtn.addEventListener('click', closeFilm);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeFilm(); });
