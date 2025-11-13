//dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
});

const projects = [
  { title: 'Twinstones', desc: 'A Dicord bot: Rolls two d12 (Hope + Fear) the Daggerheart™ way', img: 'images/screenshots/twinstones.png', link: 'https://twinstones.link', type: 'Discord' },
  { title: 'TornEngine.com', desc: 'A Website: A collection of tools for Torn.com', img: 'images/screenshots/tornengine.png', link: 'https://tornengine.com', type: 'Website' },
];

const typeImages = {
  'Discord': 'images/discord.svg',
  'Website': 'images/website.svg',
};

//above the carousel, list the projects in one list without images
const projectList = document.getElementById('project-list');
projects.forEach(p => {
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerHTML = `
    <strong class="card-title"><a href="${p.link}" target="_blank" class="card-link text-decoration-none"><img src="${typeImages[p.type]}" alt="${p.type}" style="height: 20px;"> ${p.title}</a></strong>
    <span class="card-text">${p.desc}</span>
  `;
  projectList.appendChild(li);
});

//populate the carousel with project cards
const inner = document.getElementById('carousel-inner');
projects.forEach((p, i) => {
  const div = document.createElement('div');
  div.className = 'carousel-item' + (i === 0 ? ' active' : '');

  div.innerHTML = `
    <div class="card" style="width: 100%; max-width: 400px; margin: 0 auto; cursor: pointer;" onclick="window.open('${p.link}', '_blank')">
      <div class="card-body text-center">
        <h5 class="card-title"><img src="${typeImages[p.type]}" alt="${p.type}" style="height: 20px;"> ${p.title}</h5>
        <p class="card-text">${p.desc}</p>
        <img src="${p.img}" class="card-img-top" alt="${p.title}">
      </div>
    </div>
  `;
  
  inner.appendChild(div);
});
