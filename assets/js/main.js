
(() => {
  const body = document.body;
  const current = body.dataset.page;
  document.querySelectorAll('[data-page]').forEach(a => { if (a.dataset.page === current) a.classList.add('active'); });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true':'false');
  });

  document.querySelectorAll('.faq-q').forEach(btn => btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    btn.querySelector('span').textContent = open ? '−' : '+';
  }));

  const slider = document.querySelector('[data-slider]');
  if (slider) {
    const cards = [...slider.querySelectorAll('.testimonial-card')];
    const dots = [...document.querySelectorAll('.dots i')];
    let idx = 0;
    const show = i => { idx = (i + cards.length) % cards.length; cards.forEach((c,n)=>c.classList.toggle('active', n===idx)); dots.forEach((d,n)=>d.classList.toggle('active', n===idx)); };
    slider.querySelector('.prev').addEventListener('click',()=>show(idx-1));
    slider.querySelector('.next').addEventListener('click',()=>show(idx+1));
    setInterval(()=>show(idx+1),6500);
  }

  const toast = document.getElementById('siteToast');
  const flash = msg => { if(!toast) return; toast.textContent = msg; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),3200); };
  document.querySelectorAll('.smart-form').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    flash('Thank you. Your request has been received.');
    form.reset();
  }));
  document.querySelectorAll('.newsletter-form:not(.smart-form)').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault(); flash('Subscription received.'); form.reset();
  }));

  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    }), {threshold:.12}); items.forEach(el=>io.observe(el));
  } else items.forEach(el=>el.classList.add('in'));
})();
