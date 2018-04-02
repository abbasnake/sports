(function () {
  'use strict';

  const $   = (selector) => document.querySelector(selector);
  const $$  = (selector) => document.querySelectorAll(selector);
  const $$$ = (selector) => document.createElement(selector);

  const runNavbar = () => {
    const buttons = $$('.js-btn');
    const pages   = $$('.js-page');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', (e) => {
        if (e.target.classList.contains('js-btn-1')) {
          pages[0].classList.remove('is-hidden');
          pages[1].classList.add('is-hidden');
          pages[2].classList.add('is-hidden');
        }
        if (e.target.classList.contains('js-btn-2')) {
          pages[0].classList.add('is-hidden');
          pages[1].classList.remove('is-hidden');
          pages[2].classList.add('is-hidden');
        }
        if (e.target.classList.contains('js-btn-3')) {
          pages[0].classList.add('is-hidden');
          pages[1].classList.add('is-hidden');
          pages[2].classList.remove('is-hidden');
        }
      });
    }
  };

  const template = (data, parent) => {

    const li = $$$('li');
    li.classList.add('m-li'); // adding SMACSS classes
    li.textContent = data;
    parent.appendChild(li); //add ul to container
  };

  const fetchRegistry = () => { // GET TODOS function
      fetch('api/registry')             // FetchAPI GET
      .then(res => res.json())
      .then(registry => {
        const container = $('.js-registry');
        for (let i = 0; i < registry.data.length; i++) {
          const ul = $$$('ul');
          ul.classList.add('l-ul', 'm-table-list', 's-table-list'); // adding SMACSS classes

          template(registry.data[i].date, ul);
          template(registry.data[i].score.A, ul);
          template(registry.data[i].comments.A, ul);
          template(registry.data[i].score.R, ul);
          template(registry.data[i].comments.R, ul);

          container.appendChild(ul);
        }
      });
    };

  runNavbar();
  fetchRegistry();
  // runRegistry()

}());
