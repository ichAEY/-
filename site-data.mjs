const bookingUrl = "https://yandex.com/maps/org/studiya_professionalnogo_manikyura_i_pedikyura/53831548320/?booking%5Bpage%5D=resources&booking%5Bpermalink%5D=53831548320&ll=37.628810%2C55.737659&z=17";
const service = (name, price, time = "", description = "") => ({ name, price, time, description, url: bookingUrl });

const portfolioFiles = [
  "00007fail",
  "00002fail",
  "00010fail",
  "00004fail",
  "00001fail",
  "00009fail",
  "00006fail",
  "00011fail",
  "00003fail",
  "00008fail",
  "00005fail",
];

export default {
  template: {
    profileType: "master",
    serviceMode: "categories",
    portfolioPreviewCount: 5,
  },

  brand: {
    name: "Алла",
    subtitle: "Nail master",
    monogram: "A",
  },

  master: {
    name: "Алла",
    dative: "Алле",
    genitive: "Аллы",
    monogram: "A",
    profession: "маникюра, педикюра и оформления бровей",
    heroTitle: "Алла — мастер маникюра и педикюра",
    heroCopy: "Маникюр, педикюр, наращивание и оформление бровей в центре Москвы, рядом с метро Третьяковская.",
    experienceYears: "",
    experienceAria: "",
    aboutTitle: "Меня зовут Алла",
    aboutLead: "Аккуратная работа, стойкое покрытие и внимание к деталям.",
    aboutParagraphs: [
      "Меня зовут Алла. Я мастер маникюра, педикюра и оформления бровей. Принимаю в центре Москвы, на Пятницкой улице.",
      "В работе для меня важны аккуратность, чистота, стойкость покрытия и внимание к пожеланиям. Клиенты особенно отмечают качество френча, прочность покрытия и комфортную атмосферу в кабинете.",
    ],
    skills: ["Маникюр и педикюр", "Наращивание и ремонт", "Брови", "Обучение мастеров"],
  },

  location: {
    city: "Москва",
    metro: "м. Третьяковская",
    cityMetro: "Москва · м. Третьяковская",
    address: "Москва, Пятницкая улица, 41с2",
    mapCardAddress: "Пятницкая улица, 41с2",
    schedule: "по предварительной записи",
    scheduleCapitalized: "По предварительной записи",
    latitude: 55.737659,
    longitude: 37.628810,
  },

  contacts: {
    phoneDisplay: "+7 919 106-81-02",
    phoneHref: "tel:+79191068102",
    personalTelegramUrl: "",
    channelTelegramUrl: "",
  },

  links: {
    bookingUrl,
    bookingWidgetScriptUrl: "/noop.js",
    reviewsUrl: "https://yandex.com/maps/org/studiya_professionalnogo_manikyura_i_pedikyura/53831548320/reviews/",
    mapUrl: "https://yandex.com/maps/org/studiya_professionalnogo_manikyura_i_pedikyura/53831548320/?ll=37.628810%2C55.737659&z=17",
    routeUrl: "https://yandex.ru/maps/?mode=routes&rtext=~55.737659%2C37.628810&rtt=auto",
    mobileMapEmbedUrl: "https://yandex.ru/map-widget/v1/?ll=37.628810%2C55.737659&mode=search&oid=53831548320&ol=biz&z=17",
    desktopMapEmbedUrl: "https://yandex.ru/map-widget/v1/?ll=37.628810%2C55.737659&mode=search&oid=53831548320&ol=biz&z=17",
    yandexMapHrefMatch: "yandex.com/maps/org/studiya_professionalnogo_manikyura_i_pedikyura/53831548320",
  },

  reputation: {
    rating: "5,0",
    reviewCount: "40",
  },

  images: {
    portrait: "/assets/client/master.png",
    about: "/assets/client/master.png",
    favicon: "/assets/client/master.png",
    beforeAfter: [],
    gallery: portfolioFiles.map((file, index) => ({
      src: `/assets/client/portfolio/${file}.png`,
      alt: `Работа Аллы — фото ${index + 1}`,
    })),
  },

  services: {
    manicure: [],
    pedicure: [],
  },

  serviceCategories: [
    {
      key: "manicure",
      label: "Маникюр",
      items: [
        service("Комплекс: маникюр + укрепление ногтей гелем", "4 000 ₽", "2 ч 30 мин"),
        service("Комплекс: маникюр + френч", "4 000 ₽", "2 ч"),
        service("Комплекс: снятие + маникюр + выравнивание + покрытие", "от 3 300 ₽", "2 ч"),
        service("Комплекс: маникюр + выравнивание + покрытие гель-лаком", "3 000 ₽", "2 ч"),
        service("Маникюр аппаратный", "2 000 ₽", "1 ч"),
        service("Маникюр аппаратный + восстанавливающее покрытие Straderm", "2 650 ₽", "1 ч"),
        service("Мужской маникюр", "от 2 000 ₽", "1 ч"),
        service("Дизайн — 1 ноготь", "150 ₽", "30 мин"),
      ],
    },
    {
      key: "extensions",
      label: "Наращивание и ремонт",
      items: [
        service("Коррекция наращённых ногтей", "4 600 ₽", "2 ч 30 мин", "Есть доплата за длину"),
        service("Наращивание ногтей 1–2 длина", "5 500 ₽", "3 ч", "Есть доплата за длину"),
        service("Наращивание ногтей — выкладной френч", "8 000 ₽", "3 ч"),
        service("Наращивание 1 ногтя", "600 ₽", "30 мин"),
        service("Ремонт ногтя", "300 ₽", "15 мин"),
        service("Снятие наращённых ногтей без последующего покрытия", "1 000 ₽", "1 ч"),
      ],
    },
    {
      key: "pedicure",
      label: "Педикюр",
      items: [
        service("Smart педикюр без покрытия", "3 500 ₽", "1 ч"),
        service("Комплекс педикюр с покрытием Luxio, Emi (Smart)", "4 000 ₽", "1 ч 45 мин"),
        service("Комплекс педикюр с покрытием гель-лак + Straderm", "4 500 ₽", "2 ч 15 мин"),
        service("Лечебный педикюр Straderm", "4 000 ₽", "1 ч 30 мин"),
        service("Мужской педикюр", "4 200 ₽", "1 ч"),
        service("Педикюр с покрытием гель-лак, без обработки стопы", "3 000 ₽", "1 ч"),
      ],
    },
    {
      key: "brows",
      label: "Брови",
      items: [
        service("Комплекс Lami бровей", "3 500 ₽", "1 ч"),
        service("Коррекция + окрашивание бровей Shik", "2 500 ₽", "1 ч"),
        service("Коррекция бровей", "1 500 ₽", "30 мин"),
        service("Окрашивание бровей Shik", "1 500 ₽", "1 ч"),
      ],
    },
    {
      key: "training",
      label: "Обучение",
      items: [
        service("Обучение маникюру и педикюру с нуля. Повышение квалификации мастеров", "10 000 ₽", "12 ч"),
      ],
    },
  ],

  reviews: [
    { text: "Хожу к Алле уже три года.", author: "Ирина Козлова" },
    { text: "Алла отличный мастер и профессионал!", author: "Карина Котова" },
    { text: "Такого френча я ещё не делала никогда.", author: "Надежда Г." },
  ],

  promotions: [],

  amenities: [
    { title: "Центр Москвы", text: "Пятницкая улица, рядом с метро Третьяковская" },
    { title: "Рейтинг 5,0", text: "40 отзывов на Яндекс Картах" },
    { title: "Широкий прайс", text: "Маникюр, педикюр, наращивание, брови и обучение" },
  ],

  seo: {
    title: "Алла — маникюр и педикюр на Третьяковской",
    description: "Алла — мастер маникюра, педикюра, наращивания и оформления бровей в Москве, Пятницкая улица, 41с2. Услуги, цены, работы, отзывы и запись.",
    keywords: ["маникюр Третьяковская", "педикюр Третьяковская", "маникюр Пятницкая", "наращивание ногтей Москва", "мастер маникюра Алла"],
    locale: "ru_RU",
  },

  analytics: {
    yandexMetrikaId: "",
  },
};
