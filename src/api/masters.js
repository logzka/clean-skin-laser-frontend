const masters = [
  {
    master: {
      id: '23456jgf',
      first_name: 'Мария',
      last_name: 'Воспанова',
      services: ['nbuv7vcrnuy74', 'byg76fgvf64f'],
      photo: '/img/vospanova.webp',
      description: 'description',
      documents: [],
      experience: '5 лет',
      closest_free_dates: [
        new Date().setDate(new Date().getDate() + 1),
        new Date().setDate(new Date().getDate() + 4),
        new Date().setDate(new Date().getDate() + 6),
      ],
    },
  }, {
    master: {
      id: '897dnjmf88',
      first_name: 'Валерий',
      last_name: 'Иванов',
      services: ['hgfd76545hgf', 'byg76fgvf64f'],
      photo: '/img/ivanov.webp',
      skills: 'Следует отметить, что социально-экономическое развитие, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для распределения внутренних резервов и ресурсов. Разнообразный и богатый опыт говорит нам, что сплочённость команды профессионалов однозначно фиксирует необходимость экспериментов, поражающих по своей масштабности и грандиозности. А ещё акционеры крупнейших компаний могут быть преданы социально-демократической анафеме.',
      experience: 'Более 10 лет',
      closest_free_dates: [
        new Date().setDate(new Date().getDate() + 2),
      ],
    },
  },
];

export default masters;
