const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.panel;

    tabs.forEach((item) => {
      item.classList.toggle('is-active', item === tab);
      item.setAttribute('aria-selected', item === tab ? 'true' : 'false');
    });

    panels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.id === target);
    });
  });
});

const projectRows = document.querySelectorAll('.project-row');

function embedProjectVideo(rowIndex, videoId, title) {
  const row = projectRows[rowIndex];
  if (!row) return;

  const media = row.querySelector('.project-photo');
  if (!media) return;

  media.style.aspectRatio = '16 / 9';
  media.style.border = '0';
  media.style.background = '#000';
  media.innerHTML = `
    <iframe
      src="https://www.youtube-nocookie.com/embed/${videoId}"
      title="${title}"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      style="width:100%;height:100%;border:0;display:block;"
    ></iframe>
  `;
}

embedProjectVideo(0, 'JdTQf0DiIRU', 'RoboCup@Home project video');
embedProjectVideo(3, 'tTIqCnOurGE', 'Automated Crane System project video');

document.getElementById('year').textContent = new Date().getFullYear();
