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

  let db = {
    "schedule": [
    {
      "date": "01.02.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "02.02.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "03.02.2018",
      "score": {
        "A": 1,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "04.02.2018",
      "score": {
        "A": 1,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "05.02.2018",
      "score": {
        "A": 1,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "06.02.2018",
      "score": {
        "A": 1,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "07.02.2018",
      "score": {
        "A": 1,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "08.02.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "09.02.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "10.02.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "11.02.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "12.02.2018",
      "score": {
        "A": 1,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "13.02.2018",
      "score": {
        "A": 1,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "14.02.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "15.02.2018",
      "score": {
        "A": 0,
        "R": 1
      },
      "comments": {
        "A": "-",
        "R": "RR"
      }
    },
    {
      "date": "16.02.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "17.02.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "18.02.2018",
      "score": {
        "A": 1,
        "R": 1
      },
      "comments": {
        "A": "-",
        "R": "9km"
      }
    },
    {
      "date": "19.02.2018",
      "score": {
        "A": 1,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "20.02.2018",
      "score": {
        "A": 0,
        "R": 1
      },
      "comments": {
        "A": "-",
        "R": "RR"
      }
    },
    {
      "date": "21.02.2018",
      "score": {
        "A": 0,
        "R": 1
      },
      "comments": {
        "A": "-",
        "R": "9km"
      }
    },
    {
      "date": "22.02.2018",
      "score": {
        "A": 0,
        "R": 1
      },
      "comments": {
        "A": "-",
        "R": "RR"
      }
    },
    {
      "date": "23.02.2018",
      "score": {
        "A": 1,
        "R": 0
      },
      "comments": {
        "A": "HIIT",
        "R": "-"
      }
    },
    {
      "date": "24.02.2018",
      "score": {
        "A": 0,
        "R": 1
      },
      "comments": {
        "A": "-",
        "R": "9km 50min"
      }
    },
    {
      "date": "25.02.2018",
      "score": {
        "A": 1,
        "R": 1
      },
      "comments": {
        "A": "10 km slēpojums",
        "R": "RR"
      }
    },
    {
      "date": "26.02.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "aliņš ar graudiņu",
        "R": "-"
      }
    },
    {
      "date": "27.02.2018",
      "score": {
        "A": 0,
        "R": 1
      },
      "comments": {
        "A": "-",
        "R": "10km 53min"
      }
    },
    {
      "date": "28.02.2018",
      "score": {
        "A": 0,
        "R": 1
      },
      "comments": {
        "A": "-",
        "R": "RR"
      }
    },
    {
      "date": "01.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "02.03.2018",
      "score": {
        "A": 0,
        "R": 1
      },
      "comments": {
        "A": "-",
        "R": "RR + 2 ali"
      }
    },
    {
      "date": "03.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "šķidrais",
        "R": "biš iedzèru"
      }
    },
    {
      "date": "04.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "šķidrais",
        "R": "biš iedzèru"
      }
    },
    {
      "date": "05.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "šķidrais",
        "R": "-"
      }
    },
    {
      "date": "06.03.2018",
      "score": {
        "A": 0,
        "R": 1
      },
      "comments": {
        "A": "džems brūklenē",
        "R": "RR"
      }
    },
    {
      "date": "07.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "08.03.2018",
      "score": {
        "A": 0,
        "R": 1
      },
      "comments": {
        "A": "-",
        "R": "10km 52min"
      }
    },
    {
      "date": "09.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "10.03.2018",
      "score": {
        "A": 0,
        "R": 1
      },
      "comments": {
        "A": "pirts",
        "R": "RR + 2 ali un džins"
      }
    },
    {
      "date": "11.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "12.03.2018",
      "score": {
        "A": 1,
        "R": 1
      },
      "comments": {
        "A": "HIIT",
        "R": "10km 57min"
      }
    },
    {
      "date": "13.03.2018",
      "score": {
        "A": 1,
        "R": 1
      },
      "comments": {
        "A": "RR, TABATA",
        "R": "RR"
      }
    },
    {
      "date": "14.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "iesnas"
      }
    },
    {
      "date": "15.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "iesnas"
      }
    },
    {
      "date": "16.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "iesnas"
      }
    },
    {
      "date": "17.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "iesnas"
      }
    },
    {
      "date": "18.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "iesnas"
      }
    },
    {
      "date": "19.03.2018",
      "score": {
        "A": 1,
        "R": 2
      },
      "comments": {
        "A": "RR",
        "R": "10.5km 59min + RR"
      }
    },
    {
      "date": "20.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "21.03.2018",
      "score": {
        "A": 1,
        "R": 2
      },
      "comments": {
        "A": "RR",
        "R": "10.5km 58min + RR"
      }
    },
    {
      "date": "22.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "23.03.2018",
      "score": {
        "A": 1,
        "R": 2
      },
      "comments": {
        "A": "RR",
        "R": "10.5km 59min + RR"
      }
    },
    {
      "date": "24.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "25.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "26.03.2018",
      "score": {
        "A": 1,
        "R": 2
      },
      "comments": {
        "A": "RR",
        "R": "10.5km 60min + RR"
      }
    },
    {
      "date": "27.03.2018",
      "score": {
        "A": 1,
        "R": 0
      },
      "comments": {
        "A": "kaut kāda huiņa HIIT",
        "R": "-"
      }
    },
    {
      "date": "28.03.2018",
      "score": {
        "A": 1,
        "R": 2
      },
      "comments": {
        "A": "RR",
        "R": "10.5km 56min + RR"
      }
    },
    {
      "date": "29.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "30.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    {
      "date": "31.03.2018",
      "score": {
        "A": 0,
        "R": 0
      },
      "comments": {
        "A": "-",
        "R": "-"
      }
    },
    ]
  };

  const runRegistry = () => {

    const container = $('.js-registry');

    const makeLi = (data, parent) => {
      const li = $$$('li');
      li.classList.add('m-li'); // adding SMACSS classes
      li.textContent = data;
      parent.appendChild(li);
    };

    const insertData = () => {
      for (let i = 0; i < db.schedule.length; i++) { // loop through db
        
        const ul = $$$('ul'); // create ul to place data li's in
        ul.classList.add('l-table-list', 'm-table-list', 's-table-list'); // adding SMACSS classes

        makeLi(db.schedule[i].date, ul); //add li's with data to ul
        makeLi(db.schedule[i].score.A, ul);
        makeLi(db.schedule[i].score.R, ul);
        makeLi(db.schedule[i].comments.A, ul);
        makeLi(db.schedule[i].comments.R, ul);

        container.appendChild(ul); //add ul to container
      }
    };

    insertData();
  };

  runNavbar();
  runRegistry();

}());
