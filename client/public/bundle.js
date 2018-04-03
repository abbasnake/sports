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

  const registry = (dbData) => {

    const liTemplate = (data, parent) => {
      const li = $$$('li');
      li.classList.add('m-li', 's-li'); // adding SMACSS classes

      li.addEventListener('dblclick', (e) => {
        e.target.setAttribute('contenteditable', 'true');
      });

      li.addEventListener('blur', (e) => { // when user moves away from editable field this is run
        e.target.setAttribute('contenteditable', 'false');
      });

      li.textContent = data;
      parent.appendChild(li);
    };

    const insertDataToDOM = (data) => {
      const container = $('.js-registry');
      for (let i = 0; i < data.length; i++) {
        const ul = $$$('ul');
        ul.classList.add('l-ul', 'm-table-list', 's-table-list'); // adding SMACSS classes

        const slicedDate = data[i].date.slice(0, 10); // to just see the year-month-day

        liTemplate(slicedDate, ul);
        liTemplate(data[i].score.A, ul);
        liTemplate(data[i].score.R, ul);
        liTemplate(data[i].comments.A, ul);
        liTemplate(data[i].comments.R, ul);

        container.appendChild(ul);
      }
    };

    insertDataToDOM(dbData);
  };

  const fetchAndInsertRegistry = () => { // GET TODOS function
      fetch('api/registry')              // FetchAPI GET
      .then(res => res.json())
      .then(db => {
        registry(db.data); // wrap data in necessary tags and insert to DOM
      });
    };

  runNavbar();
  fetchAndInsertRegistry();
  // runRegistry()

}());
