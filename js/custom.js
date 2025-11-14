//dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
});


//map project types to images

const typeImages = {
  'Discord': 'images/discord.svg',
  'Website': 'images/website.svg',
};

const projects = [];
//fetch projects from projects.json
fetch('js/projects.json')
  .then(r => r.json())
  .then(data => {
    console.log(data);
    data.forEach(p => projects.push(p));

    //populate the project list
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

    //populate the screenshot carousel
    const inner = document.getElementById('carousel-inner');
projects.forEach((p, i) => {
  const div = document.createElement('div');
  div.className = 'carousel-item' + (i === 0 ? ' active' : '');

  div.innerHTML = `
    <div class="card" style="width: 100%; max-width: 400px; margin: 0 auto; cursor: pointer;" onclick="window.open('${p.link}', '_blank')">
      <div class="card-body text-center">
        <h5 class="card-title"><img src="${typeImages[p.type]}" alt="${p.type}" style="height: 20px;"> ${p.title}</h5>
        <p class="card-text">${p.desc}</p>
        ${p.img ? `<img src="${p.img}" class="card-img-top" alt="${p.title}">` : ''}
      </div>
    </div>
  `;

  inner.appendChild(div);
});

  });

//populate the character art carousel, dynamically load images from the images/art folder
fetch('images/art/art.json')
  .then(r => r.json())
  .then(files => {
    const inner = document.getElementById('carousel-inner-character-art');

    //max height 250px and center image
    //format: {"filename":"art1.png", "description":"Marlow"}
    files.forEach((file, i) => {
      const div = document.createElement('div');
      div.className = 'carousel-item' + (i === 0 ? ' active' : '');
      div.innerHTML = `
            <div class="card" style="width: 100%; max-width: 400px; margin: 0 auto;">
              <div class="card-body text-center">
                <h5 class="card-title">${file.description}</h5>
                <img src="images/art/${file.filename}" class="card-img-top" alt="${file.description}">
              </div>
            </div>

      `;
      inner.appendChild(div);
    });
  });

