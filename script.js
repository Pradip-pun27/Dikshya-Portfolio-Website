// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Subtle parallax tilt on portrait
const portrait = document.querySelector('.portrait-frame');
if (portrait && matchMedia('(hover:hover)').matches) {
  const wrap = portrait.parentElement;
  wrap.addEventListener('mousemove', (e) => {
    const r = wrap.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    portrait.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(0)`;
  });
  wrap.addEventListener('mouseleave', () => {
    portrait.style.transform = '';
  });
  portrait.style.transition = 'transform .4s ease';
  wrap.style.perspective = '900px';
}

// Nav background tighten on scroll
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 12) nav.style.boxShadow = '0 10px 30px -20px rgba(58,31,43,.25)';
  else nav.style.boxShadow = 'none';
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
