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

const servicesApi = [{
  id: 'hgfd76545hgf',
  name: 'Удаление тату/татуажа',
  master: ['897dnjmf88'],
}, {
  id: 'byg76fgvf64f',
  name: 'Пилинг',
  master: ['23456jgf', '897dnjmf88'],
}, {
  id: 'nbuv7vcrnuy74',
  name: 'Эпиляция',
  master: ['23456jgf'],
}];

const mastersApi = [
  {
    master: {
      id: '23456jgf',
      first_name: 'Мария',
      last_name: 'Воспанова',
      services: ['nbuv7vcrnuy74', 'byg76fgvf64f'],
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
      services: ['hgfd76545hgf', 'byg76fgvf64f'],
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
    services: ['nbuv7vcrnuy74', 'byg76fgvf64f'],
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
    services: ['hgfd76545hgf', 'byg76fgvf64f'],
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
    services: ['hgfd76545hgf', 'byg76fgvf64f'],
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
    services: ['nbuv7vcrnuy74', 'byg76fgvf64f'],
    experience: '5 лет',
    closest_free_dates: [
      'Mon Aug 15 2022 12:00:00 GMT+0300 (Москва, стандартное время)',
      'Mon Sep 08 2022 18:00:00 GMT+0300 (Москва, стандартное время)',
      'Mon Sep 08 2022 19:00:00 GMT+0300 (Москва, стандартное время)',
    ],
  },
  type: 'free',
}];

const studioApi = [{
  photo: '',
  label: 'Ресепшн',
  title: 'Добро пожаловать на территорию чистой и здоровой кожи',
  desc: 'Следует отметить, что социально-экономическое развитие, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для распределения внутренних резервов и ресурсов.',
}, {
  photo: '',
  label: 'Кабинет лазерной эпиляции и косметологии',
  title: 'Вас приветствует кабинет лазерной косметологии',
  desc: 'Разнообразный и богатый опыт говорит нам, что сплочённость команды профессионалов однозначно фиксирует необходимость экспериментов, поражающих по своей масштабности и грандиозности. А ещё акционеры крупнейших компаний могут быть преданы социально-демократической анафеме.',
}];

const lasersApi = [{
  photo: '/img/laser_combaine.gif',
  name: 'Неодимовый лазер + Элос эпилятор Lasertech COMBINE Premium Edition',
  desc: [{
    title: 'Неодимовый лазер (короктоимпульсный, Nd:YAG)',
    sub_desc: 'Основной функционал направлен на работу с искусственным пигментом (тату, татуаж). Излучение с длиной волны 1064 нм идеально удаляет черный пигмент и близкие к нему цвета, длина волны 532-красные и близко к нему цвета. Будьте готовы, что данные длины волн (закон физики!) очень слабо поглощают такие цвета как зеленый, синий, желтый, белый. Они могут только обесцветить их, полностью разрушить их невозможно Nd:YAG Q-switch-лазерами. В комплексной терапии Nd: YAG Q-switch-лазерами используем для  коррекции естественной пигментации(веснушки, лентиго по эстетическим показаниям) и карбоновый пилинг.Карбоновый пилинг - это процедура, которая чрезвычайно эффективна для глубокого очищения кожи и омоложения.Данная процедура всесезонна, при соблюдении рекомендаций косметолога.Процедура подходит для людей с любым типом кожи.Карбоновый пилинг улучшает и выравнивает цвет лица, придает коже свежесть и упругость, нормализует салоотделение, уничтожает патогенную микрофлору. Отличительной особенностью данной процедуры от иных пилингов является использования специального средства с частицами диоксида углерода.',
  }, {
    title: 'ELOS (электро - оптическое воздействие RF+IPL)',
    sub_desc: 'Эпиляция, омоложение. Преимущества Элос эпиляции заключается, во-первых в большом световом окне (апертура), наконечник Элос манипулы имеет оптимальные размеры для обработки как больших зон поверхности, так и локальных зон, например, кожи лица. Во-вторых, возможность дополнительного прогрева за счет биполярного тока. В-третьих, дополнительное охлаждение, которое осуществляется за счет элемента Пельтье, который находиться в манипуле, что позволяет комфортно проводить процедуру для клиента и избежать побочных эффектов в виде ожогов.Также, можно отметить, что использования Элос технологии позволяет работать в двух техниках - “штамповый” и “движение” В комплексной терапии так же возможно проводить эстетическую коррекцию акне, пигментацию и сосудистых поражений на лице.',
  }, {
    title: 'IPL (режим SHR- функция фотоэпиляция)',
    sub_desc: 'Аппарат, согласно современным требованиям, оснащен мощной системой охлаждения (радиатор увеличенного объема, установлен дополнительно фильтр для очистки воды, датчики расположены внутри системы), пилотный луч, симмерная плата. Большой сенсорный экран c русифицированным меню. Металлический корпус. При покупке аппарата обучение работе на оборудовании предоставляется бесплатно, доступно для 3 сотрудников, в течение трех месяцев после заключения договора.Обучение предусмотрено в онлайн формате(ZOOM) и очно в нашем офисе в Москве.Дополнительно предоставляются видео по основным процедурам и протоколы процедур. Приобретая аппарат, Вы получаете полную комплектацию, а именно, линзы 532, 1064 длины волны, насадку для карбонового пилинга, фотофильтры, защитные очки для мастера и клиента, в подарок идет гель для карбонового пилинга, объемом 300 мл, которого Вам хватит на 120-130 процедур!!! контактный гель(бесцветный, средней вязкости), объемом 300 мл.Вам необходимо приобрести только дистиллированную воду и можно приступать к работе. Гарантия на оборудование - 1 год(функциональные части аппарата), на манипулу - 1 год, гарантия на лампу - ресурс 1 млн.вспышек.По окончанию ресурса можно заменить лампу в нашем сервисном центре. После приобретения аппарата Вам будет доступен чат для клиентов(обмен опытом, консультации), поддержка сервисного специалиста, косметолога и персонального менеджера, доступ к рекламным материалам для быстрого старта.',
  }],
}];

export default {
  stocksApi,
  servicesApi,
  mastersApi,
  scheduleApi,
  studioApi,
  lasersApi,
};
