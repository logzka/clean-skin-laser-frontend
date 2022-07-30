const stocksApi = [{
  id: 1,
  name: 'stock_1',
  route: '/assets/stocks/htmlconvd-cz2YNf53x1.jpeg',
}, {
  id: 2,
  name: 'stock_2',
  route: '/assets/stocks/plakat27.jpeg',
}, {
  id: 3,
  name: 'stock_3',
  route: '/assets/stocks/stroenie-kozhi_.png',
}];

const scheduleApi = [{
  date: 'Tue Jul 05 2022 14:30:00 GMT+0300 (Москва, стандартное время)',
  master: 'Воспанова Мария',
  type: 'free',
  services: ['Эпиляция'],
}, {
  date: 'Tue Jul 05 2022 12:00:00 GMT+0300 (Москва, стандартное время)',
  master: 'Иванов Валерий',
  type: 'taken',
  services: ['Сведение тату/татуажа', 'Пилинг'],
}, {
  date: 'Tue Jul 05 2022 9:00:00 GMT+0300 (Москва, стандартное время)',
  master: 'Иванов Валерий',
  type: 'free',
  services: ['Сведение тату/татуажа', 'Пилинг'],
}, {
  date: 'Tue Jul 05 2022 07:30:00 GMT+0300 (Москва, стандартное время)',
  master: 'Воспанова Мария',
  type: 'free',
  services: ['Эпиляция'],
}];

export default {
  stocksApi,
  scheduleApi,
};
