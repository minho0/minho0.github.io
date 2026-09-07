// 탭 전환
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    panels.forEach((p) => p.classList.remove('is-active'));

    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    document.getElementById(tab.getAttribute('aria-controls')).classList.add('is-active');
  });
});

// 좌우 화살표로도 탭 이동
document.querySelector('.tabs').addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
  const list = [...tabs];
  const i = list.indexOf(document.activeElement);
  if (i === -1) return;
  const next = list[(i + (e.key === 'ArrowRight' ? 1 : list.length - 1)) % list.length];
  next.focus();
  next.click();
});

// 푸터 연도
document.getElementById('year').textContent = new Date().getFullYear();
