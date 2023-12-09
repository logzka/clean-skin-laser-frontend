const schedule = [{
  date: new Date().setDate(new Date().getDate() + 1),
  type: 'free',
  master: {
    id: '23456jgf',
    first_name: 'Мария',
    last_name: 'Воспанова',
    services: ['nbuv7vcrnuy74', 'byg76fgvf64f'],
    experience: '5 лет',
    closest_free_dates: [
      new Date().setDate(new Date().getDate() + 1),
      new Date().setDate(new Date().getDate() + 4),
      new Date().setDate(new Date().getDate() + 6),
    ],
  },
}, {
  date: new Date().setDate(new Date().getDate() + 2),
  master: {
    id: '897dnjmf88',
    first_name: 'Валерий',
    last_name: 'Иванов',
    services: ['hgfd76545hgf', 'byg76fgvf64f'],
    experience: 'Более 10 лет',
    closest_free_dates: [
      new Date().setDate(new Date().getDate() + 2),
    ],
  },
  type: 'taken',
}, {
  date: new Date().setDate(new Date().getDate() + 2),
  master: {
    id: '897dnjmf88',
    first_name: 'Валерий',
    last_name: 'Иванов',
    services: ['hgfd76545hgf', 'byg76fgvf64f'],
    experience: 'Более 10 лет',
    closest_free_dates: [
      new Date().setDate(new Date().getDate() + 2),
    ],
  },
  type: 'free',
}, {
  date: new Date().setDate(new Date().getDate() + 6),
  master: {
    id: '23456jgf',
    first_name: 'Мария',
    last_name: 'Воспанова',
    services: ['nbuv7vcrnuy74', 'byg76fgvf64f'],
    experience: '5 лет',
    closest_free_dates: [
      new Date().setDate(new Date().getDate() + 1),
      new Date().setDate(new Date().getDate() + 4),
      new Date().setDate(new Date().getDate() + 6),
    ],
  },
  type: 'free',
}, {
  date: new Date().setDate(new Date().getDate() + 4),
  master: {
    id: '23456jgf',
    first_name: 'Мария',
    last_name: 'Воспанова',
    services: ['nbuv7vcrnuy74', 'byg76fgvf64f'],
    experience: '5 лет',
    closest_free_dates: [
      new Date().setDate(new Date().getDate() + 1),
      new Date().setDate(new Date().getDate() + 4),
      new Date().setDate(new Date().getDate() + 6),
    ],
  },
  type: 'free',
}];

export default schedule;
