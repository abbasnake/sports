const Registry = require('./models/db.js')

const insertOldData = () => {
  Registry.create({
    date: new Date('2018-02-01'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-02'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-03'),
    score: {
      A: 1,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-04'),
    score: {
      A: 1,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-05'),
    score: {
      A: 1,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-06'),
    score: {
      A: 1,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-07'),
    score: {
      A: 1,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-08'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-09'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-10'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-11'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-12'),
    score: {
      A: 1,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-13'),
    score: {
      A: 1,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-14'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-15'),
    score: {
      A: 0,
      R: 1
    },
    comments: {
      A: '-',
      R: 'RR'
    }
  }),
  Registry.create({
    date: new Date('2018-02-16'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-17'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-18'),
    score: {
      A: 1,
      R: 1
    },
    comments: {
      A: '-',
      R: '9km'
    }
  }),
  Registry.create({
    date: new Date('2018-02-19'),
    score: {
      A: 1,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-20'),
    score: {
      A: 0,
      R: 1
    },
    comments: {
      A: '-',
      R: 'RR'
    }
  }),
  Registry.create({
    date: new Date('2018-02-21'),
    score: {
      A: 0,
      R: 1
    },
    comments: {
      A: '-',
      R: '9km'
    }
  }),
  Registry.create({
    date: new Date('2018-02-22'),
    score: {
      A: 0,
      R: 1
    },
    comments: {
      A: '-',
      R: 'RR'
    }
  }),
  Registry.create({
    date: new Date('2018-02-23'),
    score: {
      A: 1,
      R: 0
    },
    comments: {
      A: 'HIIT',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-24'),
    score: {
      A: 0,
      R: 1
    },
    comments: {
      A: '-',
      R: '9km 50min'
    }
  }),
  Registry.create({
    date: new Date('2018-02-25'),
    score: {
      A: 1,
      R: 1
    },
    comments: {
      A: '10 km slēpojums',
      R: 'RR'
    }
  }),
  Registry.create({
    date: new Date('2018-02-26'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: 'Aliņš ar graudiņu',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-02-27'),
    score: {
      A: 0,
      R: 1
    },
    comments: {
      A: '-',
      R: '10km 53min'
    }
  }),
  Registry.create({
    date: new Date('2018-02-28'),
    score: {
      A: 0,
      R: 1
    },
    comments: {
      A: '-',
      R: 'RR'
    }
  }),
  Registry.create({
    date: new Date('2018-03-01'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-03-02'),
    score: {
      A: 0,
      R: 1
    },
    comments: {
      A: '-',
      R: 'RR + 2 ali'
    }
  }),
  Registry.create({
    date: new Date('2018-03-03'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: 'šķidrais',
      R: 'biš iedzēru'
    }
  }),
  Registry.create({
    date: new Date('2018-03-04'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: 'šķidrais',
      R: 'biš iedzēru'
    }
  }),
  Registry.create({
    date: new Date('2018-03-05'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: 'šķidrais',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-03-06'),
    score: {
      A: 0,
      R: 1
    },
    comments: {
      A: 'džems brūklenē',
      R: 'RR'
    }
  }),
  Registry.create({
    date: new Date('2018-03-07'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-03-08'),
    score: {
      A: 0,
      R: 1
    },
    comments: {
      A: '-',
      R: '10km 52min'
    }
  }),
  Registry.create({
    date: new Date('2018-03-09'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-03-10'),
    score: {
      A: 0,
      R: 1
    },
    comments: {
      A: 'pirts',
      R: 'RR + 2 ali un džins'
    }
  }),
  Registry.create({
    date: new Date('2018-03-11'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-03-12'),
    score: {
      A: 1,
      R: 1
    },
    comments: {
      A: 'HIIT',
      R: '10km 57min'
    }
  }),
  Registry.create({
    date: new Date('2018-03-13'),
    score: {
      A: 1,
      R: 1
    },
    comments: {
      A: 'RR, TABATA',
      R: 'RR'
    }
  }),
  Registry.create({
    date: new Date('2018-03-14'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: 'iesnas'
    }
  }),
  Registry.create({
    date: new Date('2018-03-15'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: 'iesnas'
    }
  }),
  Registry.create({
    date: new Date('2018-03-16'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: 'iesnas'
    }
  }),
  Registry.create({
    date: new Date('2018-03-17'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: 'iesnas'
    }
  }),
  Registry.create({
    date: new Date('2018-03-18'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: 'iesnas'
    }
  }),
  Registry.create({
    date: new Date('2018-03-19'),
    score: {
      A: 1,
      R: 2
    },
    comments: {
      A: 'RR',
      R: '10.5km 59min + RR'
    }
  }),
  Registry.create({
    date: new Date('2018-03-20'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-03-21'),
    score: {
      A: 1,
      R: 2
    },
    comments: {
      A: 'RR',
      R: '10.5km 58min + RR'
    }
  }),
  Registry.create({
    date: new Date('2018-03-22'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-03-23'),
    score: {
      A: 1,
      R: 2
    },
    comments: {
      A: 'RR',
      R: '10.5km 59min + RR'
    }
  }),
  Registry.create({
    date: new Date('2018-03-24'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-03-25'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-03-26'),
    score: {
      A: 1,
      R: 2
    },
    comments: {
      A: 'RR',
      R: '10.5km 60min + RR'
    }
  }),
  Registry.create({
    date: new Date('2018-03-27'),
    score: {
      A: 1,
      R: 0
    },
    comments: {
      A: 'kaut kāda huiņa HIIT',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-03-28'),
    score: {
      A: 1,
      R: 2
    },
    comments: {
      A: 'RR',
      R: '10.5km 56min + RR'
    }
  }),
  Registry.create({
    date: new Date('2018-03-29'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-03-30'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-03-31'),
    score: {
      A: 1,
      R: 0
    },
    comments: {
      A: 'malka',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-01'),
    score: {
      A: 1,
      R: 1
    },
    comments: {
      A: 'malka',
      R: 'Balance/Core'
    }
  }),
  Registry.create({
    date: new Date('2018-04-02'),
    score: {
      A: 1,
      R: 2
    },
    comments: {
      A: 'RR',
      R: '10.5km 57min + RR'
    }
  }),
  Registry.create({
    date: new Date('2018-04-03'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-04'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-05'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-06'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-07'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-08'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-09'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-10'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-11'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-12'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-13'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-14'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-15'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-16'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-17'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-18'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-19'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-20'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-21'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-22'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-23'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-24'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-25'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-26'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-27'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-28'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-29'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  }),
  Registry.create({
    date: new Date('2018-04-30'),
    score: {
      A: 0,
      R: 0
    },
    comments: {
      A: '-',
      R: '-'
    }
  })
}

module.exports = insertOldData()