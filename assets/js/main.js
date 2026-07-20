const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.primary-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuToggle?.setAttribute('aria-expanded', 'false');
}));
const modal = document.querySelector('.modal');
const closeModal = () => { modal.classList.remove('visible'); modal.setAttribute('aria-hidden', 'true'); };
document.querySelectorAll('.open-modal').forEach(button => button.addEventListener('click', () => {
  modal.classList.add('visible'); modal.setAttribute('aria-hidden', 'false'); modal.querySelector('input')?.focus();
}));
document.querySelector('.modal-close')?.addEventListener('click', closeModal);
modal?.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });
document.querySelector('.modal form')?.addEventListener('submit', event => {
  event.preventDefault(); alert('Thank you. Your enquiry has been received.'); event.currentTarget.reset(); closeModal();
});
document.querySelector('#year').textContent = new Date().getFullYear();
