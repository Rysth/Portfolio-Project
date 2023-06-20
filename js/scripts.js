const buttonOpen = document.querySelector('#header__button--open');
const buttonClose = document.querySelector('#header__button--close');

const navigationMenu = document.querySelector('#header__nav');
const navigationLinks = document.querySelectorAll('.header__list--item');

function toggleNavigation() {
  navigationMenu.classList.toggle('header__nav--active');
}

navigationLinks.forEach((element) => {
  element.addEventListener('click', () => {
    toggleNavigation();
  });
});

buttonOpen.addEventListener('click', () => {
  toggleNavigation();
});

buttonClose.addEventListener('click', () => {
  toggleNavigation();
});

/* Portfolio Section */
/* PopUp Content */

const portfolioArray = [
  {
    name: 'Tonic',
    profile: 'Canopy',
    categories: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: '../images/portfolio/work_1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    name: 'Multi-Post Stories',
    profile: 'Facebook',
    categories: ['Full Stack Dev', '2015'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: '../images/portfolio/work_2.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    name: 'Facebook 360',
    profile: 'Facebook',
    categories: ['Full Stack Dev', '2015'],
    description:
      'Exploring the future of media in Facebook`s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: '../images/portfolio/work_3.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    name: 'Uber Navigation',
    profile: 'Uber',
    categories: ['Lead Developer', '2018'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: '../images/portfolio/work_4.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
  },
];

const bodyElement = document.querySelector('#body');
const portfolioButtons = document.querySelectorAll('.portfolio__button');

portfolioButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const index = event.target.id;
    createWorkWindow(index);
  });
});

function createWorkWindow(index) {
  const portfolioData = portfolioArray[index];

  const {
    name,
    profile,
    categories,
    description,
    image,
    technologies,
    live,
    source,
  } = portfolioData;

  const modalItem = document.createElement(`div`);
  modalItem.classList.add('modal');
  modalItem.innerHTML = `
            <article class="modal__card">
              <header class="modal__header flex-row justify-between">
                <h2 class="modal__title">${name}</h2>
                <button class="modal__button">
                  <img
                    id="modal__button--image"
                    class="header__toggle"
                    src="./images/icons/x-icon.svg"
                    alt="Menu icon on the mobile version"
                  />
                </button>
              </header>
              <div class="modal__content flex-column">
                <div class="modal__profile flex-row align-center">
                  <h3 class="uppercase color-info">${profile}</h3>
                  <ul class="modal__list flex-row">
                    ${categories
                      .map((item) => `<li class="modal__item">${item}</li>`)
                      .join('')}
                  </ul>
                </div>
                <img
                  src="${image}"
                  alt="Work 1"
                  class="modal__image"
                />
                <p class="modal__description">
                  ${description}
                </p>
                <ul class="modal__tags flex-row align-center">
                   ${technologies
                     .map((item) => `<li class="modal__tag">${item}</li>`)
                     .join('')}
                </ul>
                <hr />
                <div class="modal__actions flex-row">
                  <a
                    id="0"
                    href="${live}"
                    class="button button__primary modal__button"
                    >See live</a
                  >
                  <a
                    id="0"
                    href="${source}"
                    class="button button__primary modal__button"
                    >See source</a
                  >
                </div>
              </div>
            </article>
         `;

  showWorkContent(modalItem);
}

function showWorkContent(element) {
  bodyElement.appendChild(element);
}
