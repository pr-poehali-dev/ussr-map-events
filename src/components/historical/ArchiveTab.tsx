import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ArchiveItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  items: number;
  details: string[];
  featured: string[];
}

const archiveItems: ArchiveItem[] = [
  {
    id: "photos-war",
    title: "Великая Отечественная война",
    category: "Фотографии",
    year: "1941-1945",
    description: "Документальные снимки боевых действий, портреты героев, военная техника",
    items: 1247,
    details: [
      "Битва за Москву - 156 снимков",
      "Сталинградская битва - 234 снимка",
      "Блокада Ленинграда - 189 снимков",
      "Курская дуга - 167 снимков",
      "Освобождение Европы - 312 снимков",
      "Взятие Берлина - 189 снимков"
    ],
    featured: ["Знамя Победы над Рейхстагом", "Оборона Брестской крепости", "Парад Победы 1945"]
  },
  {
    id: "photos-space",
    title: "Космическая программа",
    category: "Фотографии",
    year: "1957-1991",
    description: "Запуски ракет, космонавты, космодромы, научные центры",
    items: 856,
    details: [
      "Спутник-1 и начало космической эры",
      "Юрий Гагарин - первый полёт",
      "Валентина Терешкова в космосе",
      "Программа 'Луна' и луноходы",
      "Орбитальная станция 'Мир'",
      "Космодром Байконур"
    ],
    featured: ["Гагарин перед стартом", "Первый спутник", "Выход в открытый космос"]
  },
  {
    id: "photos-industry",
    title: "Индустриализация",
    category: "Фотографии",
    year: "1928-1940",
    description: "Строительство заводов, фабрик, ГЭС, трудовые будни",
    items: 623,
    details: [
      "Магнитогорский металлургический комбинат",
      "Днепрогэс - энергия страны",
      "Московский метрополитен",
      "Челябинский тракторный завод",
      "Турксиб - магистраль в Азию"
    ],
    featured: ["Стахановцы на производстве", "Первая пятилетка", "Беломорканал"]
  },
  {
    id: "photos-culture",
    title: "Культура и искусство",
    category: "Фотографии",
    year: "1922-1991",
    description: "Театр, кино, музыка, балет, художники, писатели",
    items: 945,
    details: [
      "Большой театр - великие постановки",
      "Съёмки классических фильмов",
      "Галина Уланова в балете",
      "Дмитрий Шостакович за работой",
      "ВДНХ - достижения страны"
    ],
    featured: ["Броненосец Потёмкин", "Лебединое озеро", "Третьяковская галерея"]
  },
  {
    id: "docs-decrees",
    title: "Декреты и постановления",
    category: "Документы",
    year: "1917-1991",
    description: "Официальные государственные документы, законы, указы",
    items: 2341,
    details: ["Декрет о мире", "Декрет о земле", "Конституция 1936", "Постановления ЦК"],
    featured: ["Договор об образовании СССР", "Основной Закон"]
  },
  {
    id: "docs-personal",
    title: "Личные дела",
    category: "Документы",
    year: "1922-1991",
    description: "Биографии, автобиографии, характеристики известных деятелей",
    items: 1567,
    details: ["Герои Советского Союза", "Партийные деятели", "Учёные и конструкторы"],
    featured: ["Дело Королёва", "Дело Гагарина"]
  },
  {
    id: "docs-diplomatic",
    title: "Дипломатическая переписка",
    category: "Документы",
    year: "1922-1991",
    description: "Международные договоры, соглашения, телеграммы",
    items: 892,
    details: ["Брестский мир 1918", "Пакт Молотова-Риббентропа", "Потсдамская конференция"],
    featured: ["Карибский кризис", "Союз-Аполлон"]
  },
  {
    id: "docs-economy",
    title: "Экономические отчёты",
    category: "Документы",
    year: "1928-1991",
    description: "Пятилетние планы, производственные показатели, статистика",
    items: 1723,
    details: ["Первая пятилетка 1928-1932", "Статистика производства", "Отчёты Госплана"],
    featured: ["Индустриализация", "Коллективизация"]
  },
  {
    id: "video-news",
    title: "Кинохроника",
    category: "Видео",
    year: "1922-1991",
    description: "Новостные сюжеты, парады, официальные мероприятия",
    items: 456,
    details: ["Парад Победы 1945", "Октябрьские парады", "Журнал 'Новости дня'"],
    featured: ["Гагарин на Красной площади", "Олимпиада-80"]
  },
  {
    id: "video-docs",
    title: "Документальные фильмы",
    category: "Видео",
    year: "1930-1991",
    description: "Фильмы о событиях, людях, достижениях СССР",
    items: 234,
    details: ["Обыкновенный фашизм", "Романтики", "Первый рейс"],
    featured: ["Человек с киноаппаратом", "Падение Берлина"]
  },
  {
    id: "video-features",
    title: "Художественные фильмы",
    category: "Видео",
    year: "1924-1991",
    description: "Классика советского кинематографа",
    items: 567,
    details: ["Броненосец Потёмкин", "Иван Васильевич", "Летят журавли", "Баллада о солдате"],
    featured: ["Москва слезам не верит", "Золотой телёнок"]
  },
  {
    id: "video-edu",
    title: "Образовательные фильмы",
    category: "Видео",
    year: "1930-1991",
    description: "Учебные материалы, научно-популярные фильмы",
    items: 389,
    details: ["Научно-популярные лекции", "Учебные пособия", "Познавательные передачи"],
    featured: ["'Очевидное - невероятное'", "Атом на службе человека"]
  },
  {
    id: "audio-speeches",
    title: "Выступления лидеров",
    category: "Аудио",
    year: "1920-1991",
    description: "Речи политических деятелей, радиообращения",
    items: 312,
    details: ["Ленин - речь на II съезде Советов", "Сталин - обращение 1941", "Горбачёв - перестройка"],
    featured: ["Левитан - голос Победы", "Юрий Левитан"]
  },
  {
    id: "audio-music",
    title: "Музыкальные записи",
    category: "Аудио",
    year: "1930-1991",
    description: "Советские песни, симфонии, оперы, народная музыка",
    items: 1456,
    details: ["Катюша", "Священная война", "Подмосковные вечера", "Шостакович - 7 симфония"],
    featured: ["Гимн СССР", "Песня о Родине"]
  },
  {
    id: "audio-radio",
    title: "Радиопередачи",
    category: "Аудио",
    year: "1920-1991",
    description: "Информационные программы, интервью, репортажи",
    items: 723,
    details: ["Маяк", "Радио России", "В гостях у сказки"],
    featured: ["Говорит Москва", "Время, события, люди"]
  },
  {
    id: "audio-literature",
    title: "Художественное чтение",
    category: "Аудио",
    year: "1930-1991",
    description: "Записи чтения классической литературы",
    items: 445,
    details: ["Пушкин - 'Евгений Онегин'", "Гоголь - 'Мёртвые души'", "Толстой - 'Война и мир'"],
    featured: ["Мастер и Маргарита", "Тихий Дон"]
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Фотографии": return "Image";
    case "Документы": return "FileText";
    case "Видео": return "Video";
    case "Аудио": return "Music";
    default: return "Archive";
  }
};

export default function ArchiveTab() {
  const categories = ["Все", "Фотографии", "Документы", "Видео", "Аудио"];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-red-50 to-white border-red-200">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Архивные материалы СССР</CardTitle>
          <CardDescription>
            Уникальная коллекция документов, фотографий, видео и аудиозаписей из государственных архивов
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map((cat) => (
              <div key={cat} className="text-center p-4 rounded-lg bg-white border border-red-100">
                <Icon name={getCategoryIcon(cat)} size={32} className="mx-auto mb-2 text-primary" />
                <p className="font-semibold text-sm">{cat}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {archiveItems.filter(item => item.category === cat).length} коллекций
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {archiveItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow border-red-100 hover:border-red-300">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                  {item.category}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {item.year}
                </Badge>
              </div>
              <CardTitle className="font-display text-lg">{item.title}</CardTitle>
              <CardDescription className="text-sm">{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name={getCategoryIcon(item.category)} size={16} className="text-primary" />
                  <span>{item.items} материалов</span>
                </div>
                <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                  Открыть
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}