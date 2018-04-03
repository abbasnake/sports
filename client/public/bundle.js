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

    const addLiEventListeners = (el) => {

      const saveEdit = (e) => { // fired on either the enter key or clicking away
        e.target.setAttribute('contenteditable', 'false');
        e.target.classList.remove('is-editable');

        //need fetchAPI save here
        updateRegistry(e);
      };

      el.addEventListener('dblclick', (e) => {           // double click to edit field
        e.target.setAttribute('contenteditable', 'true'); // make editable
        e.target.classList.add('is-editable');            // add SMACSS styling class
        e.target.focus();                                 // auto focus
      });

      el.addEventListener('keypress', (e) => { // when pressing enter
        if (e.keyCode === 13) saveEdit(e);
      });

      el.addEventListener('blur', saveEdit); // when clicking away
    };

    const liTemplate = (data, parent, dataType) => {
      const li = $$$('li');
      li.classList.add('m-li', 's-li'); // adding SMACSS classes
      li.setAttribute('data-type', dataType); // adding dataType for reference later
      addLiEventListeners(li);
      li.textContent = data;
      parent.appendChild(li);
    };

    const insertDataToDOM = (data) => {
      const container = $('.js-registry');

      const ulList = $$('.l-ul'); // this is super unelegant
      for (let i = 1; i < ulList.length; i++) { // removing all uls befor adding new ones (refreshing basically), starts with index 1 to not remove the header
        ulList[i].remove();
        // console.log('removed a ul')
      }

      for (let i = 0; i < data.length; i++) {
        const ul = $$$('ul');
        ul.classList.add('l-ul', 'm-table-list', 's-table-list'); // adding SMACSS classes
        ul.setAttribute('data-id', data[i]._id); // adding the _id of mLab/mongodb documents for reference later

        const slicedDate = data[i].date.slice(0, 10); // to just see the year-month-day

        liTemplate(slicedDate, ul, 'date');
        liTemplate(data[i].score.A, ul, 'score.A');
        liTemplate(data[i].score.R, ul, 'score.R');
        liTemplate(data[i].comments.A, ul, 'comments.A');
        liTemplate(data[i].comments.R, ul, 'comments.R');

        container.appendChild(ul);
      }
    };

    insertDataToDOM(dbData);
  };

  const fetchAndInsertRegistry = () => { // GET TODOS function
    fetch('api/registry')                // FetchAPI GET
    .then(res => res.json())
    .then(db => {
      registry(db.data); // wrap data in necessary tags and insert to DOM
    });
  };

  const updateRegistry = (e) => {
    // e.preventDefault() // not necessary since not in a form

    const id = e.target.parentNode.attributes['data-id'].value; // get relevant document id
    const dataType = e.target.attributes['data-type'].value;
    const newValue = e.target.textContent;

    fetch('api/registry', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: id, dataType: dataType, value: newValue})
    })
    .then(fetchAndInsertRegistry());
  };

  runNavbar();
  fetchAndInsertRegistry();
  // runRegistry()

}());
