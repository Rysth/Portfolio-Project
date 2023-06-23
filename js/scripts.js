window.onload = () => {
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

  // PortfolioArray: Contains all the Information for each Portfolio Card.
  const portfolioArray = [
    {
      id: '0',
      name: 'Tonic',
      profile: 'Canopy',
      categories: ['Back End Dev', '2015'],
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required',
      image: './images/portfolio/work_1.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live: '#',
      source: '#',
      class: '',
    },
    {
      id: '1',
      name: 'Multi-Post Stories',
      profile: 'Facebook',
      categories: ['Full Stack Dev', '2015'],
      description:
        'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      image: './images/portfolio/work_2.png',
      technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
      live: '#',
      source: '#',
      class: 'grid--reversed',
    },
    {
      id: '2',
      name: 'Facebook 360',
      profile: 'Facebook',
      categories: ['Full Stack Dev', '2015'],
      description:
        'Exploring the future of media in Facebook`s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      image: './images/portfolio/work_3.png',
      technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
      live: '#',
      source: '#',
      class: '',
    },
    {
      id: '3',
      name: 'Uber Navigation',
      profile: 'Uber',
      categories: ['Lead Developer', '2018'],
      description:
        'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      image: './images/portfolio/work_4.png',
      technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
      live: '#',
      source: '#',
      class: 'grid--reversed',
    },
  ];

  // BodyElement: Body tag selected to be used as a platform for the PopUp Window.
  // PortfolioElement: Portfolio Section tag selected to contain all the Portfolio Cards.
  const bodyElement = document.querySelector('#body');
  const portfolioElement = document.querySelector('#portfolio');

  // CreateWorkWindow(index): Create a new PopUp Window each time that's called.
  // --index: Works to retrieved the Data stored on the PortfolioArray by using his index.
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

    const modalItem = document.createElement('div');
    modalItem.id = 'modal';
    modalItem.classList.add('modal');
    modalItem.innerHTML = `
            <article class="modal__card">
              <header class="modal__header flex-row justify-between align-center">
                <h2 class="modal__title">${name}</h2>
                <button class="modal__button">
                  <img
                    id="modal__button--close"
                    src="./images/icons/dark/x-icon-dark.svg"
                    alt="PopUp window close button"
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
               <div class="modal__system grid grid-uneven-two">
                <p class="modal__description">
                  ${description}
                </p>
                <div class="modal__system flex-column ">
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
                      target="_blank"
                      class="button button__primary modal__button flex-row align-center justify-center"
                      >See live 
                      <img
                        src="./images/icons/dark/live-dark.svg"
                        alt="Live icon dark version"
                      /></a
                    >
                    <a
                      id="0"
                      href="${source}"
                      target="_blank"
                      class="button button__primary modal__button modal__button--purple flex-row align-center justify-center"
                      >See source
                        <img
                        src="./images/icons/dark/github-dark.svg"
                        alt="Github icon dark version"
                      />
                      </a
                    >
                  </div>
                </div>
               </div>
              </div>
            </article>
         `;

    bodyElement.style.overflow = 'hidden';
    bodyElement.appendChild(modalItem);

    const modalCloseButton = document.querySelector('#modal__button--close');
    modalCloseButton.addEventListener('click', () => {
      bodyElement.removeChild(modalItem);
      bodyElement.style.overflow = 'auto';
    });
  }

  // AddPortfolioWork(): Put every Portfolio Card to his container.
  function addPortfolioWork() {
    portfolioElement.innerHTML = `
  ${portfolioArray
    .map(
      (item) => `<article class="portfolio__card grid" >
              <header class="portfolio__header ${item.class}">
                <img
                  src="${item.image}"
                  alt="Work 1"
                  class="portfolio__image"
                />
              </header>
              <div class="portfolio__content grid">
                <h2 class="portfolio__title color-dark">${item.name}</h2>
                <div class="portfolio__profile flex-row align-center">
                  <h3 class="uppercase color-info">${item.profile}</h3>
                  <ul class="portfolio__list flex-row">
                      ${item.categories
                        .map(
                          (item) => `<li class="portfolio__item">${item}</li>`,
                        )
                        .join('')}
                  </ul>
                </div>
                <p class="primary_description">
                  ${item.description}
                </p>
                <ul class="portfolio__tags flex-row align-center">
                  ${item.technologies
                    .map((item) => `<li class="portfolio__tag">${item}</li>`)
                    .join('')}
                </ul>
                <div class="portfolio__actions">
                  <button
                    id="${item.id}"
                    href="#"
                    class="button button__primary portfolio__button"
                    >See project</button>
                </div>
              </div>
            </article>`,
    )
    .join('')}`;

    const portfolioButtons = document.querySelectorAll('.portfolio__button');
    portfolioButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const index = event.target.id;
        createWorkWindow(index);
      });
    });
  }

  // AddPortfolioWork(): Called of the Function to fill the PortfolioElement.
  addPortfolioWork();
};

/* CONTACTS FORM VALIDATION */
function isUpperCase(letter) {
  const REGEX = /^[A-Za-z]+$/;
  return !!(letter === letter.toUpperCase() && REGEX.test(letter));
}

const submitError = document.querySelector('#submit__error');
const formElement = document.querySelector('#form');

formElement.addEventListener('submit', (event) => {
  const emailValue = event.target[1].value;
  const emailArray = emailValue.split('');

  for (let index = 0; index < emailArray.length; index += 1) {
    const letter = emailArray[index];
    const validator = isUpperCase(letter);
    if (validator) {
      submitError.style.visibility = 'visible';
      event.preventDefault();
      break;
    } else {
      submitError.style.visibility = 'hidden';
    }
  }
});
