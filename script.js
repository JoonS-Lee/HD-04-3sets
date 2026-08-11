// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// 네비게이션 활성 링크 표시
const sections = ['expertise', 'story', 'credentials', 'contact']
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const navLinks = Array.from(document.querySelectorAll('.nav nav a'));
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach((s) => spy.observe(s));
