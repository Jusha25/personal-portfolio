const projects = [
  {
    title: 'Tonic',
    devs: ['CANOPY', ' • backend', ' • 2021'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ['html', 'css', 'javascript'],
    image: './images/snapshoot-portfolio.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: './images/btn-img-pu1.png',
    btnImg2: './images/btn-img-pu2.png',
  },

  {
    title: 'Multi-Post Stories',
    devs: ['CANOPY', ' • backend', ' • 2021'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ['html', 'css', 'javascript'],
    image: './images/SnapshootPortfolio2.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: './images/btn-img-pu1.png',
    btnImg2: './images/btn-img-pu2.png',
  },

  {
    title: 'Facebook 360',
    devs: ['CANOPY', ' • backend', ' • 2021'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ['html', 'css', 'javascript'],
    image: './images/SnapshootPortfolio3.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: './images/btn-img-pu1.png',
    btnImg2: './images/btn-img-pu2.png',
  },
];

// const projectSection = document.getElementById("portfolio");
const projectSection = document.querySelector('page-section');
const overlay = document.querySelector('#overlay'); // get overlay
const container = document.querySelector('.pop-up-window'); // get the popup-window

container.classList.add('active');
overlay.classList.add('active');
document.body.style.overflow = 'hidden';

function addProjects(n) {
  const {
    title,
    devs,
    description,
    tags,
    image,
    liveVersion,
    btnImg1,
    sourceLink,
    btnImg2,
  } = projects[n];

  projectSection.innerHTML += `
    // <div class="main-pu-container">
  // <div class="content-container">
  <div class="heading-btn">
  <h1 class="project-title-pu">${title}</h1>
  <button type="button" class="close-btn-pu">X</button>
  </div>
  <ul class="devs-pu">
  <li class="dev-pu">${devs[0]}</li>
  <li class="dev-pu2">${devs[1]}</li>
  <li class="dev-pu2">${devs[2]}</li>
  </ul>
  <div class="img-container-pu">
  <img src=${image} alt"project-image-pu" class="project-img-pu">
  </div>
  <div class="conatiner-pc-pu">
  <p class="project-info-pu">${description}</p>
  <div class="project-info-pu2">
  <ul class="tags-pu">
  <li class="tag-pu">${tags[0]}</li>
  <li class="tag-pu">${tags[1]}</li>
  <li class="tag-pu">${tags[2]}</li>
  </ul>
  <div class="btn-container-pu">
  <button type="button" class="btn-pu">${liveVersion}<img class="btn-img-pu" src=${btnImg1}></button>
  <button type="button" class="btn-pu t">${sourceLink}<img class="btn-img-pu" src=${btnImg2}></button>
  </div>
  </div>
  </div>
  // </div>
  // </div>`;
}

for (let i = 0; i < projects.length; i += 1) {
  addProjects(i);
}

const buttonOne = document.querySelector('.project-button.one');
const buttonTwo = document.querySelector('.project-button.two');
const buttonThree = document.querySelector('.project-button.three');

function close() {
  const container = document.querySelector('.popup-container');
  container.style.display = 'none';
  overlay.classList.remove('active');
}

overlay.addEventListener('click', () => {
  container.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto'; // for turning the background scrolling effect off
});

function open(index) {
  const {
    title,
    devs,
    description,
    tags,
    image,
    liveVersion,
    sourceLink,
    btnImg1,
    btnImg2,
  } = projects[index];
  const dev1 = devs[0];
  const dev2 = devs[1];
  const dev3 = devs[2];
  const tags1 = tags[0];
  const tags2 = tags[1];
  const tags3 = tags[2];
  const container = document.querySelector('.popup-container');
  container.innerHTML = `
  // <div class="main-pu-container">
  // <div class="content-container">
  <div class="heading-btn">
  <h1 class="project-title-pu">${title}</h1>
  <button type="button" class="close-btn-pu">X</button>
  </div>
  <ul class="devs-pu">
  <li class="dev-pu">${dev1}</li>
  <li class="dev-pu2">${dev2}</li>
  <li class="dev-pu2">${dev3}</li>
  </ul>
  <div class="img-container-pu">
  <img src=${image} alt"project-image-pu" class="project-img-pu">
  </div>
  <div class="conatiner-pc-pu">
  <p class="project-info-pu">${description}</p>
  <div class="project-info-pu2">
  <ul class="tags-pu">
  <li class="tag-pu">${tags1}</li>
  <li class="tag-pu">${tags2}</li>
  <li class="tag-pu">${tags3}</li>
  </ul>
  <div class="btn-container-pu">
  <button type="button" class="btn-pu">${liveVersion}<img class="btn-img-pu" src=${btnImg1}></button>
  <button type="button" class="btn-pu t">${sourceLink}<img class="btn-img-pu" src=${btnImg2}></button>
  </div>
  </div>
  </div>
  // </div>
  // </div>
`;
  container.style.display = 'block';
  const buttonClose = document.querySelector('.close-btn-pu');
  buttonClose.addEventListener('click', close);
}

buttonOne.addEventListener('click', () => {
  open(0);
});
buttonTwo.addEventListener('click', () => {
  open(1);
});
buttonThree.addEventListener('click', () => {
  open(2);
});
