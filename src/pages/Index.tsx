import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

interface HistoricalEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  region: string;
  category: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

interface MapRegion {
  id: string;
  name: string;
  x: number;
  y: number;
  events: number;
  description: string;
  founded?: string;
  population?: string;
  significance: string;
  keyEvents: string[];
}

interface HistoricalFigure {
  id: string;
  name: string;
  role: string;
  years: string;
  achievements: string[];
  quote: string;
  category: string;
}

const historicalEvents: HistoricalEvent[] = [
  {
    id: "1",
    year: 1917,
    title: "Октябрьская революция",
    description: "25 октября большевики во главе с Лениным свергли Временное правительство, началась новая эра",
    region: "Петроград",
    category: "Революция"
  },
  {
    id: "2",
    year: 1922,
    title: "Образование СССР",
    description: "30 декабря был подписан договор об образовании Союза Советских Социалистических Республик",
    region: "Москва",
    category: "Политика"
  },
  {
    id: "3",
    year: 1928,
    title: "Начало первой пятилетки",
    description: "Старт индустриализации СССР, создание тяжёлой промышленности",
    region: "Вся страна",
    category: "Экономика"
  },
  {
    id: "4",
    year: 1933,
    title: "Строительство Беломорканала",
    description: "Завершение строительства канала, соединяющего Белое и Балтийское моря",
    region: "Карелия",
    category: "Инфраструктура"
  },
  {
    id: "5",
    year: 1935,
    title: "Стахановское движение",
    description: "Алексей Стаханов перевыполнил норму добычи угля в 14 раз, начало массового движения передовиков",
    region: "Донбасс",
    category: "Экономика"
  },
  {
    id: "6",
    year: 1936,
    title: "Принятие Конституции СССР",
    description: "Принята новая Конституция, провозгласившая построение основ социализма",
    region: "Москва",
    category: "Политика"
  },
  {
    id: "7",
    year: 1941,
    title: "Начало Великой Отечественной войны",
    description: "22 июня нацистская Германия напала на СССР, началась Великая Отечественная война",
    region: "Вся страна",
    category: "Война"
  },
  {
    id: "8",
    year: 1942,
    title: "Сталинградская битва",
    description: "Начало переломной битвы, которая изменила ход войны в пользу СССР",
    region: "Сталинград",
    category: "Война"
  },
  {
    id: "9",
    year: 1943,
    title: "Курская битва",
    description: "Крупнейшее танковое сражение в истории, окончательный перелом в войне",
    region: "Курск",
    category: "Война"
  },
  {
    id: "10",
    year: 1945,
    title: "Победа в Великой Отечественной войне",
    description: "9 мая Германия капитулировала, завершилась Великая Отечественная война",
    region: "Берлин",
    category: "Война"
  },
  {
    id: "11",
    year: 1949,
    title: "Первое испытание ядерного оружия",
    description: "СССР провёл успешное испытание атомной бомбы, став второй ядерной державой",
    region: "Семипалатинск",
    category: "Наука"
  },
  {
    id: "12",
    year: 1953,
    title: "Смерть Сталина",
    description: "5 марта скончался И.В. Сталин, руководивший страной 30 лет",
    region: "Москва",
    category: "Политика"
  },
  {
    id: "13",
    year: 1956,
    title: "XX съезд КПСС",
    description: "Хрущёв выступил с докладом о культе личности Сталина, начало оттепели",
    region: "Москва",
    category: "Политика"
  },
  {
    id: "14",
    year: 1957,
    title: "Запуск первого спутника",
    description: "4 октября СССР запустил первый искусственный спутник Земли 'Спутник-1'",
    region: "Байконур",
    category: "Космос"
  },
  {
    id: "15",
    year: 1961,
    title: "Полёт Юрия Гагарина",
    description: "12 апреля состоялся первый полёт человека в космос на корабле 'Восток-1'",
    region: "Байконур",
    category: "Космос"
  },
  {
    id: "16",
    year: 1963,
    title: "Полёт Валентины Терешковой",
    description: "16 июня первая женщина в космосе совершила полёт на корабле 'Восток-6'",
    region: "Байконур",
    category: "Космос"
  },
  {
    id: "17",
    year: 1965,
    title: "Первый выход в открытый космос",
    description: "18 марта Алексей Леонов совершил первый выход человека в открытый космос",
    region: "Байконур",
    category: "Космос"
  },
  {
    id: "18",
    year: 1970,
    title: "Луноход-1",
    description: "Первый в мире планетоход начал исследование Луны",
    region: "Байконур",
    category: "Космос"
  },
  {
    id: "19",
    year: 1975,
    title: "Проект 'Союз-Аполлон'",
    description: "Первая международная стыковка советского и американского кораблей",
    region: "Космос",
    category: "Космос"
  },
  {
    id: "20",
    year: 1980,
    title: "Олимпиада в Москве",
    description: "Летние Олимпийские игры прошли в столице СССР",
    region: "Москва",
    category: "Спорт"
  },
  {
    id: "21",
    year: 1985,
    title: "Начало перестройки",
    description: "М.С. Горбачёв стал генсеком, начались реформы перестройки и гласности",
    region: "Москва",
    category: "Политика"
  },
  {
    id: "22",
    year: 1986,
    title: "Авария на Чернобыльской АЭС",
    description: "26 апреля произошла крупнейшая ядерная катастрофа в истории",
    region: "Чернобыль",
    category: "Катастрофа"
  },
  {
    id: "23",
    year: 1989,
    title: "Вывод войск из Афганистана",
    description: "15 февраля завершён вывод советских войск из Афганистана",
    region: "Афганистан",
    category: "Война"
  },
  {
    id: "24",
    year: 1991,
    title: "Распад СССР",
    description: "26 декабря СССР прекратил существование, образовались независимые государства",
    region: "Москва",
    category: "Политика"
  }
];

const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "В каком году был образован СССР?",
    options: ["1917", "1922", "1924", "1925"],
    correctAnswer: 1,
    explanation: "СССР был образован 30 декабря 1922 года путём подписания договора четырьмя республиками.",
    category: "Образование СССР"
  },
  {
    id: "q2",
    question: "Какие республики подписали договор об образовании СССР?",
    options: ["РСФСР, УССР, БССР, ЗСФСР", "РСФСР, УССР, Казахстан", "РСФСР, БССР, Грузия", "РСФСР, УССР, БССР, Узбекистан"],
    correctAnswer: 0,
    explanation: "Договор об образовании СССР подписали четыре республики: РСФСР, Украинская ССР, Белорусская ССР и Закавказская СФСР.",
    category: "Образование СССР"
  },
  {
    id: "q3",
    question: "Кто был первым председателем СНК СССР?",
    options: ["И.В. Сталин", "В.И. Ленин", "Л.Д. Троцкий", "М.И. Калинин"],
    correctAnswer: 1,
    explanation: "Владимир Ильич Ленин был первым председателем Совета Народных Комиссаров СССР с 1922 по 1924 год.",
    category: "Образование СССР"
  },
  {
    id: "q4",
    question: "Участвовала ли Россия в Первой мировой войне?",
    options: ["Нет", "Да, на стороне Антанты", "Да, на стороне Германии", "Была нейтральной"],
    correctAnswer: 1,
    explanation: "Российская империя участвовала в Первой мировой войне на стороне Антанты с 1914 года до заключения Брестского мира в 1918 году.",
    category: "Первая мировая"
  },
  {
    id: "q5",
    question: "В каком году Россия вышла из Первой мировой войны?",
    options: ["1917", "1918", "1919", "1920"],
    correctAnswer: 1,
    explanation: "Советская Россия вышла из войны в 1918 году после подписания Брестского мира с Германией 3 марта.",
    category: "Первая мировая"
  },
  {
    id: "q6",
    question: "Какой договор завершил участие России в Первой мировой войне?",
    options: ["Версальский", "Брестский мир", "Рапалльский", "Рижский"],
    correctAnswer: 1,
    explanation: "Брестский мир был подписан 3 марта 1918 года между Советской Россией и Центральными державами.",
    category: "Первая мировая"
  },
  {
    id: "q7",
    question: "Когда началась Великая Отечественная война?",
    options: ["1 сентября 1939", "22 июня 1941", "9 мая 1945", "7 ноября 1941"],
    correctAnswer: 1,
    explanation: "Великая Отечественная война началась 22 июня 1941 года с нападения нацистской Германии на СССР.",
    category: "Вторая мировая"
  },
  {
    id: "q8",
    question: "Какая битва стала переломным моментом в Великой Отечественной войне?",
    options: ["Битва за Москву", "Сталинградская битва", "Курская битва", "Битва за Берлин"],
    correctAnswer: 1,
    explanation: "Сталинградская битва (1942-1943) стала переломным моментом, после которого стратегическая инициатива перешла к СССР.",
    category: "Вторая мировая"
  },
  {
    id: "q9",
    question: "Когда закончилась Великая Отечественная война?",
    options: ["8 мая 1945", "9 мая 1945", "2 сентября 1945", "1 мая 1945"],
    correctAnswer: 1,
    explanation: "9 мая 1945 года Германия капитулировала, этот день стал Днём Победы в Великой Отечественной войне.",
    category: "Вторая мировая"
  },
  {
    id: "q10",
    question: "Как называлась политика либерализации после смерти Сталина?",
    options: ["Перестройка", "Оттепель", "Гласность", "НЭП"],
    correctAnswer: 1,
    explanation: "Оттепель — период либерализации в СССР при Н.С. Хрущёве (1953-1964), характеризовавшийся ослаблением тоталитарного режима.",
    category: "Оттепель"
  },
  {
    id: "q11",
    question: "Кто был лидером СССР в период Оттепели?",
    options: ["И.В. Сталин", "Н.С. Хрущёв", "Л.И. Брежнев", "М.С. Горбачёв"],
    correctAnswer: 1,
    explanation: "Никита Сергеевич Хрущёв руководил СССР в 1953-1964 годах, период известный как Оттепель.",
    category: "Оттепель"
  },
  {
    id: "q12",
    question: "В каком году состоялся XX съезд КПСС с разоблачением культа личности Сталина?",
    options: ["1953", "1956", "1961", "1964"],
    correctAnswer: 1,
    explanation: "XX съезд КПСС состоялся в феврале 1956 года, на нём Хрущёв выступил с докладом о культе личности Сталина.",
    category: "Оттепель"
  },
  {
    id: "q13",
    question: "Как называется период правления Л.И. Брежнева?",
    options: ["Оттепель", "Застой", "Перестройка", "НЭП"],
    correctAnswer: 1,
    explanation: "Период застоя (1964-1985) — время правления Брежнева, характеризовавшееся замедлением темпов экономического развития.",
    category: "Застой"
  },
  {
    id: "q14",
    question: "В каком году началась эпоха застоя?",
    options: ["1953", "1964", "1985", "1991"],
    correctAnswer: 1,
    explanation: "Эпоха застоя началась в 1964 году, когда Леонид Брежнев пришёл к власти после отставки Хрущёва.",
    category: "Застой"
  },
  {
    id: "q15",
    question: "Какое событие не относится к периоду застоя?",
    options: ["Олимпиада-80 в Москве", "Афганская война", "Полёт Гагарина", "Хельсинкские соглашения"],
    correctAnswer: 2,
    explanation: "Полёт Гагарина состоялся в 1961 году, до начала эпохи застоя. Остальные события произошли в 1964-1985 годах.",
    category: "Застой"
  }
];

const quizCategories = [
  "Все темы",
  "Образование СССР",
  "Первая мировая",
  "Вторая мировая",
  "Оттепель",
  "Застой",
  "Космос",
  "Наука"
];

const historicalFigures: HistoricalFigure[] = [
  {
    id: "lenin",
    name: "Владимир Ильич Ленин",
    role: "Основатель СССР, революционер",
    years: "1870-1924",
    achievements: [
      "Руководитель Октябрьской революции 1917 года",
      "Председатель Совнаркома РСФСР и СССР",
      "Создатель первого социалистического государства"
    ],
    quote: "Учиться, учиться и учиться!",
    category: "Политики"
  },
  {
    id: "stalin",
    name: "Иосиф Виссарионович Сталин",
    role: "Генеральный секретарь ЦК ВКП(б)",
    years: "1878-1953",
    achievements: [
      "Индустриализация СССР",
      "Победа в Великой Отечественной войне",
      "Превращение СССР в сверхдержаву"
    ],
    quote: "Кадры решают всё",
    category: "Политики"
  },
  {
    id: "gagarin",
    name: "Юрий Алексеевич Гагарин",
    role: "Первый космонавт",
    years: "1934-1968",
    achievements: [
      "Первый полёт человека в космос (12 апреля 1961)",
      "Герой Советского Союза",
      "Символ космической эры человечества"
    ],
    quote: "Поехали!",
    category: "Космонавты"
  },
  {
    id: "korolev",
    name: "Сергей Павлович Королёв",
    role: "Главный конструктор",
    years: "1907-1966",
    achievements: [
      "Создатель первого спутника Земли",
      "Конструктор космического корабля 'Восток'",
      "Основоположник практической космонавтики"
    ],
    quote: "Космос наш!",
    category: "Учёные"
  },
  {
    id: "tereshkova",
    name: "Валентина Владимировна Терешкова",
    role: "Первая женщина-космонавт",
    years: "1937-н.в.",
    achievements: [
      "Первая женщина в космосе (16 июня 1963)",
      "Героиня Советского Союза",
      "Единственная женщина, совершившая одиночный космический полёт"
    ],
    quote: "Эй! Небо! Сними шляпу!",
    category: "Космонавты"
  },
  {
    id: "zhukov",
    name: "Георгий Константинович Жуков",
    role: "Маршал Советского Союза",
    years: "1896-1974",
    achievements: [
      "Командующий обороной Москвы и Ленинграда",
      "Руководитель Сталинградской и Берлинской операций",
      "Четырежды Герой Советского Союза"
    ],
    quote: "Выше голову, товарищи!",
    category: "Военные"
  },
  {
    id: "sakharov",
    name: "Андрей Дмитриевич Сахаров",
    role: "Физик-ядерщик, правозащитник",
    years: "1921-1989",
    achievements: [
      "Создатель советской водородной бомбы",
      "Лауреат Нобелевской премии мира",
      "Академик АН СССР"
    ],
    quote: "Свобода мысли — единственная гарантия от заражения народа коллективными мифами",
    category: "Учёные"
  },
  {
    id: "kurchatov",
    name: "Игорь Васильевич Курчатов",
    role: "Физик-ядерщик",
    years: "1903-1960",
    achievements: [
      "Руководитель советского атомного проекта",
      "Создатель первой атомной бомбы СССР",
      "Основатель Курчатовского института"
    ],
    quote: "Атом должен быть рабочим, а не солдатом",
    category: "Учёные"
  },
  {
    id: "landau",
    name: "Лев Давидович Ландау",
    role: "Физик-теоретик",
    years: "1908-1968",
    achievements: [
      "Лауреат Нобелевской премии по физике",
      "Создатель теории сверхтекучести",
      "Основатель советской школы теоретической физики"
    ],
    quote: "Теоретическая физика — это то, чем занимаюсь я",
    category: "Учёные"
  },
  {
    id: "tupolev",
    name: "Андрей Николаевич Туполев",
    role: "Авиаконструктор",
    years: "1888-1972",
    achievements: [
      "Создатель более 100 типов самолётов",
      "Конструктор Ту-104, Ту-134, Ту-154",
      "Трижды Герой Социалистического Труда"
    ],
    quote: "Самолёт должен быть красивым",
    category: "Конструкторы"
  },
  {
    id: "kalashnikov",
    name: "Михаил Тимофеевич Калашников",
    role: "Конструктор стрелкового оружия",
    years: "1919-2013",
    achievements: [
      "Создатель автомата АК-47",
      "Дважды Герой Социалистического Труда",
      "Самое массовое оружие в мире"
    ],
    quote: "Я создал оружие для защиты Родины",
    category: "Конструкторы"
  },
  {
    id: "shostakovich",
    name: "Дмитрий Дмитриевич Шостакович",
    role: "Композитор",
    years: "1906-1975",
    achievements: [
      "Автор 15 симфоний",
      "Народный артист СССР",
      "Один из величайших композиторов XX века"
    ],
    quote: "Искусство принадлежит народу",
    category: "Деятели культуры"
  },
  {
    id: "eisenstein",
    name: "Сергей Михайлович Эйзенштейн",
    role: "Кинорежиссёр",
    years: "1898-1948",
    achievements: [
      "Создатель фильмов 'Броненосец Потёмкин', 'Александр Невский'",
      "Основоположник теории монтажа",
      "Лауреат Сталинской премии"
    ],
    quote: "Монтаж — нерв кинематографа",
    category: "Деятели культуры"
  },
  {
    id: "ulanova",
    name: "Галина Сергеевна Уланова",
    role: "Балерина",
    years: "1910-1998",
    achievements: [
      "Прима-балерина Большого театра",
      "Дважды Герой Социалистического Труда",
      "Народная артистка СССР"
    ],
    quote: "Танец — это жизнь",
    category: "Деятели культуры"
  },
  {
    id: "yashin",
    name: "Лев Иванович Яшин",
    role: "Футболист, вратарь",
    years: "1929-1990",
    achievements: [
      "Единственный вратарь — обладатель 'Золотого мяча'",
      "Чемпион Олимпийских игр 1956",
      "Лучший вратарь XX века по версии ФИФА"
    ],
    quote: "Радость побед нельзя сравнить ни с чем",
    category: "Спортсмены"
  }
];

const mapRegions: MapRegion[] = [
  { 
    id: "moscow", 
    name: "Москва", 
    x: 55, 
    y: 35, 
    events: 15,
    description: "Столица СССР, политический и культурный центр страны",
    founded: "1147",
    population: "8.9 млн (1989)",
    significance: "Административный центр СССР, место принятия важнейших государственных решений",
    keyEvents: [
      "Образование СССР (1922)",
      "Оборона Москвы (1941)",
      "Первомайские парады"
    ]
  },
  { 
    id: "leningrad", 
    name: "Ленинград", 
    x: 50, 
    y: 25, 
    events: 12,
    description: "Город-герой, культурная столица СССР",
    founded: "1703",
    population: "5.0 млн (1989)",
    significance: "Центр науки и культуры, место Октябрьской революции",
    keyEvents: [
      "Октябрьская революция (1917)",
      "Блокада Ленинграда (1941-1944)",
      "Научный центр"
    ]
  },
  { 
    id: "baikonur", 
    name: "Байконур", 
    x: 68, 
    y: 55, 
    events: 8,
    description: "Космодром, база советской космической программы",
    founded: "1955",
    population: "70 тыс (1989)",
    significance: "Первый и крупнейший в мире космодром",
    keyEvents: [
      "Запуск Спутника-1 (1957)",
      "Полёт Гагарина (1961)",
      "Программа Союз"
    ]
  },
  { 
    id: "stalingrad", 
    name: "Сталинград", 
    x: 58, 
    y: 48, 
    events: 10,
    description: "Город-герой, место переломного сражения ВОВ",
    founded: "1589",
    population: "1.0 млн (1989)",
    significance: "Символ стойкости советского народа в Великой Отечественной войне",
    keyEvents: [
      "Сталинградская битва (1942-1943)",
      "Мамаев курган",
      "Промышленный центр"
    ]
  },
  { 
    id: "kiev", 
    name: "Киев", 
    x: 48, 
    y: 45, 
    events: 9,
    description: "Столица Украинской ССР, древний славянский город",
    founded: "882",
    population: "2.6 млн (1989)",
    significance: "Культурный и промышленный центр Украинской ССР",
    keyEvents: [
      "Освобождение от фашистов (1943)",
      "Промышленное развитие",
      "Культурный центр"
    ]
  },
  { 
    id: "minsk", 
    name: "Минск", 
    x: 52, 
    y: 38, 
    events: 7,
    description: "Столица Белорусской ССР, город-герой",
    founded: "1067",
    population: "1.6 млн (1989)",
    significance: "Восстановлен после войны, символ возрождения",
    keyEvents: [
      "Освобождение (1944)",
      "Послевоенное восстановление",
      "Промышленный центр"
    ]
  },
  { 
    id: "tbilisi", 
    name: "Тбилиси", 
    x: 56, 
    y: 60, 
    events: 6,
    description: "Столица Грузинской ССР",
    founded: "IV век",
    population: "1.3 млн (1989)",
    significance: "Культурный центр Закавказья",
    keyEvents: [
      "Грузинская культура",
      "Винодельческий регион",
      "Туристический центр"
    ]
  },
  { 
    id: "tashkent", 
    name: "Ташкент", 
    x: 72, 
    y: 62, 
    events: 8,
    description: "Столица Узбекской ССР, крупнейший город Средней Азии",
    founded: "II век до н.э.",
    population: "2.1 млн (1989)",
    significance: "Экономический и культурный центр Средней Азии",
    keyEvents: [
      "Восстановление после землетрясения (1966)",
      "Хлопковый регион",
      "Восточный центр"
    ]
  },
  { 
    id: "vladivostok", 
    name: "Владивосток", 
    x: 92, 
    y: 52, 
    events: 5,
    description: "Тихоокеанский порт СССР",
    founded: "1860",
    population: "650 тыс (1989)",
    significance: "Главная военно-морская база Тихоокеанского флота",
    keyEvents: [
      "Тихоокеанский флот",
      "Восточный форпост",
      "Порт"
    ]
  },
  { 
    id: "novosibirsk", 
    name: "Новосибирск", 
    x: 75, 
    y: 42, 
    events: 6,
    description: "Крупнейший город Сибири, научный центр",
    founded: "1893",
    population: "1.4 млн (1989)",
    significance: "Академгородок, центр сибирской науки",
    keyEvents: [
      "Академгородок (1957)",
      "Научный центр",
      "Промышленность"
    ]
  }
];

export default function Index() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [activeTab, setActiveTab] = useState("map");
  const [selectedCategory, setSelectedCategory] = useState("Все темы");

  const filteredQuestions = selectedCategory === "Все темы" 
    ? quizQuestions 
    : quizQuestions.filter(q => q.category === selectedCategory);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    if (answerIndex === filteredQuestions[currentQuiz].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuiz < filteredQuestions.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentQuiz(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-soviet-gradient rounded-sm flex items-center justify-center">
              <Icon name="Star" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-foreground">История СССР</h1>
              <p className="text-sm text-muted-foreground">Интерактивный исторический архив</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="map" className="gap-2">
              <Icon name="Map" size={18} />
              Карта
            </TabsTrigger>
            <TabsTrigger value="quiz" className="gap-2">
              <Icon name="Brain" size={18} />
              Викторины
            </TabsTrigger>
            <TabsTrigger value="timeline" className="gap-2">
              <Icon name="Calendar" size={18} />
              Хронология
            </TabsTrigger>
            <TabsTrigger value="people" className="gap-2">
              <Icon name="Users" size={18} />
              Личности
            </TabsTrigger>
            <TabsTrigger value="archive" className="gap-2">
              <Icon name="Archive" size={18} />
              Архив
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Интерактивная карта СССР</CardTitle>
                <CardDescription>Выберите регион для просмотра исторических событий</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden mb-6 bg-map-gradient border border-primary/20" style={{ height: "600px" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                  <svg 
                    className="absolute inset-0 w-full h-full opacity-30" 
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-primary/20"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <Icon name="Map" size={300} className="text-primary" />
                  </div>

                  {mapRegions.map((region) => (
                    <div key={region.id} className="absolute" style={{ left: `${region.x}%`, top: `${region.y}%` }}>
                      <button
                        onClick={() => setSelectedRegion(region.id)}
                        className={`relative w-8 h-8 rounded-full transition-all duration-300 group ${
                          selectedRegion === region.id
                            ? "bg-primary ring-4 ring-primary/40 scale-125 shadow-lg shadow-primary/50"
                            : "bg-secondary hover:bg-primary shadow-md hover:scale-110"
                        }`}
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                        <span className="sr-only">{region.name}</span>
                        <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                          selectedRegion === region.id ? "bg-primary animate-pulse" : "bg-secondary/50"
                        }`} />
                      </button>
                      
                      <div className={`absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap transition-all ${
                        selectedRegion === region.id 
                          ? "text-primary font-bold scale-110" 
                          : "text-foreground/80 font-semibold"
                      }`}>
                        <div className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20 shadow-lg">
                          {region.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedRegion && (() => {
                  const region = mapRegions.find((r) => r.id === selectedRegion);
                  if (!region) return null;
                  
                  return (
                    <Card className="animate-scale-in">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-2xl font-display mb-2">
                              {region.name}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {region.description}
                            </CardDescription>
                          </div>
                          <Badge className="bg-soviet-gradient text-white">
                            {region.events} событий
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Icon name="Calendar" size={16} />
                              <span>Основан</span>
                            </div>
                            <p className="font-semibold">{region.founded}</p>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Icon name="Users" size={16} />
                              <span>Население</span>
                            </div>
                            <p className="font-semibold">{region.population}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon name="Star" size={16} />
                            <span>Историческое значение</span>
                          </div>
                          <p className="text-sm leading-relaxed">{region.significance}</p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm font-semibold">
                            <Icon name="Bookmark" size={16} className="text-primary" />
                            <span>Ключевые события</span>
                          </div>
                          <div className="space-y-2">
                            {region.keyEvents.map((event, idx) => (
                              <div 
                                key={idx} 
                                className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                              >
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-sm">{event}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })()}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Викторина по истории СССР</CardTitle>
                <CardDescription>
                  Вопрос {currentQuiz + 1} из {filteredQuestions.length}
                </CardDescription>
                <div className="mt-4">
                  <div className="text-sm font-semibold mb-2">Выберите тему:</div>
                  <div className="flex flex-wrap gap-2">
                    {quizCategories.map((cat) => (
                      <Badge
                        key={cat}
                        variant={selectedCategory === cat ? "default" : "outline"}
                        className={`cursor-pointer transition-all ${
                          selectedCategory === cat ? "bg-soviet-gradient text-white" : ""
                        }`}
                        onClick={() => handleCategoryChange(cat)}
                      >
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Progress value={((currentQuiz + 1) / filteredQuestions.length) * 100} className="mt-4" />
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {filteredQuestions[currentQuiz].category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{filteredQuestions[currentQuiz].question}</h3>
                  <div className="grid gap-3">
                    {filteredQuestions[currentQuiz].options.map((option, index) => (
                      <Button
                        key={index}
                        variant={
                          showResult
                            ? index === filteredQuestions[currentQuiz].correctAnswer
                              ? "default"
                              : selectedAnswer === index
                              ? "destructive"
                              : "outline"
                            : "outline"
                        }
                        className="justify-start h-auto py-3 px-4 text-left"
                        onClick={() => !showResult && handleAnswerSelect(index)}
                        disabled={showResult}
                      >
                        <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}.</span>
                        {option}
                        {showResult && index === filteredQuestions[currentQuiz].correctAnswer && (
                          <Icon name="CheckCircle2" className="ml-auto" size={20} />
                        )}
                        {showResult &&
                          selectedAnswer === index &&
                          index !== filteredQuestions[currentQuiz].correctAnswer && (
                            <Icon name="XCircle" className="ml-auto" size={20} />
                          )}
                      </Button>
                    ))}
                  </div>
                </div>

                {showResult && (
                  <Card className="bg-muted animate-scale-in">
                    <CardContent className="pt-6">
                      <p className="text-sm">{filteredQuestions[currentQuiz].explanation}</p>
                      <div className="flex gap-3 mt-4">
                        {currentQuiz < filteredQuestions.length - 1 ? (
                          <Button onClick={nextQuestion}>
                            Следующий вопрос
                            <Icon name="ArrowRight" className="ml-2" size={16} />
                          </Button>
                        ) : (
                          <div className="w-full">
                            <p className="text-lg font-semibold mb-3">
                              Ваш результат: {score} из {filteredQuestions.length}
                            </p>
                            <Button onClick={resetQuiz}>
                              <Icon name="RotateCcw" className="mr-2" size={16} />
                              Начать заново
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Хронология событий</CardTitle>
                <CardDescription>Ключевые моменты истории СССР</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-6">
                    {historicalEvents
                      .sort((a, b) => a.year - b.year)
                      .map((event, index) => (
                        <div key={event.id} className="relative pl-8 pb-6 border-l-2 border-primary/20 last:border-l-0">
                          <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                          <Badge className="mb-2 bg-soviet-gradient text-white">{event.year}</Badge>
                          <h3 className="font-display font-semibold text-lg mb-1">{event.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                          <div className="flex gap-2">
                            <Badge variant="outline">
                              <Icon name="MapPin" size={12} className="mr-1" />
                              {event.region}
                            </Badge>
                            <Badge variant="secondary">{event.category}</Badge>
                          </div>
                        </div>
                      ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="people" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Известные личности СССР</CardTitle>
                <CardDescription>Великие люди, изменившие ход истории</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {historicalFigures.map((figure) => (
                    <Card key={figure.id} className="hover:shadow-lg transition-all hover:scale-105 border-primary/20">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline" className="bg-primary/10">
                            {figure.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-display">{figure.name}</CardTitle>
                        <CardDescription className="text-sm">{figure.role}</CardDescription>
                        <p className="text-xs text-muted-foreground mt-1">{figure.years}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <Icon name="Award" size={16} className="text-primary" />
                            Достижения
                          </h4>
                          <ul className="space-y-1">
                            {figure.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-3 border-t border-border">
                          <p className="text-xs italic text-muted-foreground flex gap-2">
                            <Icon name="Quote" size={14} className="text-primary flex-shrink-0 mt-0.5" />
                            <span>"{figure.quote}"</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="archive" className="space-y-6 animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2">
              {["Документальные фотографии", "Архивные документы", "Видеоматериалы", "Аудиозаписи"].map(
                (category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded bg-muted flex items-center justify-center">
                          <Icon name="FileText" size={24} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="font-display text-lg">{category}</CardTitle>
                          <CardDescription>Коллекция материалов</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Уникальные исторические материалы из государственных архивов СССР. Доступ к редким документам и
                        свидетельствам эпохи.
                      </p>
                      <Button variant="outline" className="w-full">
                        <Icon name="Eye" size={16} className="mr-2" />
                        Просмотреть
                      </Button>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="border-t border-border mt-16 py-8 bg-card/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Интерактивный исторический портал • История СССР</p>
        </div>
      </footer>
    </div>
  );
}