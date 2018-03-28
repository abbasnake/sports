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
    }
    ]
  };

  const runRegistry = () => {
    const dateContainer      = $('.js-date');
    const aScoreContainer    = $('.js-A-score');
    const rScoreContainer    = $('.js-R-score');
    const aCommentsContainer = $('.js-A-comments');
    const rCommentsContainer = $('.js-R-comments');

    const insertDate = (index) => {
      const currentDate = $$$('li');
      currentDate.textContent = `${db.schedule[index].date}`;
      dateContainer.appendChild(currentDate);
    };

    const insertDataA = (index) => {
      const currentScore = $$$('li');
      currentScore.textContent = `${db.schedule[index].score.A}`;
      aScoreContainer.appendChild(currentScore);
      const currentComment = $$$('li');
      currentComment.textContent = `${db.schedule[index].comments.A}`;
      aCommentsContainer.appendChild(currentComment);
    };

    const insertDataR = (index) => {
      const currentScore = $$$('li');
      currentScore.textContent = `${db.schedule[index].score.R}`;
      rScoreContainer.appendChild(currentScore);
      const currentComment = $$$('li');
      currentComment.textContent = `${db.schedule[index].comments.R}`;
      rCommentsContainer.appendChild(currentComment);
    };

    const insertData = () => {
      for (let i = 0; i < db.schedule.length; i++) {
        insertDate(i);
        insertDataA(i);
        insertDataR(i);
      }
    };

    insertData();

  };

  runNavbar();
  runRegistry();

}());
