const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
document.querySelectorAll('.amount').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.amount').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  const input = document.querySelector('#donation-amount');
  if (input) input.value = btn.dataset.amount;
}));
document.querySelectorAll('form[data-mailto]').forEach(form => form.addEventListener('submit', e => {
  e.preventDefault();
  const recipient = form.dataset.mailto;
  const data = new FormData(form);
  const subject = encodeURIComponent(form.dataset.subject || 'Website enquiry - Roop Singh Foundation');
  const body = encodeURIComponent([...data.entries()].map(([k,v]) => `${k}: ${v}`).join('\n'));
  const status = form.querySelector('.form-status');
  if (status) status.textContent = 'Opening your email app with the enquiry details…';
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
}));
