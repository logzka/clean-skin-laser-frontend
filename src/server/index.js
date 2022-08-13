const stocksApi = [{
  id: 1,
  name: 'stock_1',
  route: '@/assets/stocks/htmlconvd-cz2YNf53x1.jpeg',
}, {
  id: 2,
  name: 'stock_2',
  route: '@/assets/stocks/plakat27.jpeg',
}, {
  id: 3,
  name: 'stock_3',
  route: '@/assets/stocks/stroenie-kozhi_.png',
}];

const mastersApi = [
  {
    master: {
      id: '23456jgf',
      first_name: 'Мария',
      last_name: 'Воспанова',
      services: ['Эпиляция', 'Пилинг'],
      photo: 'masters/vospanova.jpeg',
      skills: 'Следует отметить, что социально-экономическое развитие, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для распределения внутренних резервов и ресурсов.',
      experience: '5 лет',
      closest_free_dates: [
        'Mon Aug 15 2022 12:00:00 GMT+0300 (Москва, стандартное время)',
        'Mon Sep 08 2022 18:00:00 GMT+0300 (Москва, стандартное время)',
        'Mon Sep 08 2022 19:00:00 GMT+0300 (Москва, стандартное время)',
      ],
    },
  }, {
    master: {
      id: '897dnjmf88',
      first_name: 'Валерий',
      last_name: 'Иванов',
      services: ['Сведение тату/татуажа', 'Пилинг'],
      photo: 'masters/ivanov.jpeg',
      skills: 'Следует отметить, что социально-экономическое развитие, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для распределения внутренних резервов и ресурсов. Разнообразный и богатый опыт говорит нам, что сплочённость команды профессионалов однозначно фиксирует необходимость экспериментов, поражающих по своей масштабности и грандиозности. А ещё акционеры крупнейших компаний могут быть преданы социально-демократической анафеме.',
      experience: 'Более 10 лет',
      closest_free_dates: [
        'Mon Aug 19 2022 13:30:00 GMT+0300 (Москва, стандартное время)',
        'Mon Aug 19 2022 19:00:00 GMT+0300 (Москва, стандартное время)',
        'Mon Aug 21 2022 19:00:00 GMT+0300 (Москва, стандартное время)',
      ],
    },
  },
];

const scheduleApi = [{
  date: 'Tue Jul 05 2022 14:30:00 GMT+0300 (Москва, стандартное время)',
  type: 'free',
  master: {
    id: '23456jgf',
    first_name: 'Мария',
    last_name: 'Воспанова',
    services: ['Эпиляция', 'Пилинг'],
    experience: '5 лет',
    closest_free_dates: [
      'Mon Aug 15 2022 12:00:00 GMT+0300 (Москва, стандартное время)',
      'Mon Sep 08 2022 18:00:00 GMT+0300 (Москва, стандартное время)',
      'Mon Sep 08 2022 19:00:00 GMT+0300 (Москва, стандартное время)',
    ],
  },
}, {
  date: 'Tue Aug 05 2022 12:00:00 GMT+0300 (Москва, стандартное время)',
  master: {
    id: '897dnjmf88',
    first_name: 'Валерий',
    last_name: 'Иванов',
    services: ['Сведение тату/татуажа', 'Пилинг'],
    experience: 'Более 10 лет',
    closest_free_dates: [
      'Mon Aug 19 2022 13:30:00 GMT+0300 (Москва, стандартное время)',
      'Mon Aug 19 2022 19:00:00 GMT+0300 (Москва, стандартное время)',
      'Mon Aug 21 2022 19:00:00 GMT+0300 (Москва, стандартное время)',
    ],
  },
  type: 'taken',
}, {
  date: 'Tue Aug 25 2022 9:00:00 GMT+0300 (Москва, стандартное время)',
  master: {
    id: '897dnjmf88',
    first_name: 'Валерий',
    last_name: 'Иванов',
    services: ['Сведение тату/татуажа', 'Пилинг'],
    experience: 'Более 10 лет',
    closest_free_dates: [
      'Mon Aug 19 2022 13:30:00 GMT+0300 (Москва, стандартное время)',
      'Mon Aug 19 2022 19:00:00 GMT+0300 (Москва, стандартное время)',
      'Mon Aug 21 2022 19:00:00 GMT+0300 (Москва, стандартное время)',
    ],
  },
  type: 'free',
}, {
  date: 'Tue Aug 15 2022 07:30:00 GMT+0300 (Москва, стандартное время)',
  master: {
    id: '23456jgf',
    first_name: 'Мария',
    last_name: 'Воспанова',
    services: ['Эпиляция', 'Пилинг'],
    experience: '5 лет',
    closest_free_dates: [
      'Mon Aug 15 2022 12:00:00 GMT+0300 (Москва, стандартное время)',
      'Mon Sep 08 2022 18:00:00 GMT+0300 (Москва, стандартное время)',
      'Mon Sep 08 2022 19:00:00 GMT+0300 (Москва, стандартное время)',
    ],
  },
  type: 'free',
}];

export default {
  stocksApi,
  mastersApi,
  scheduleApi,
};
