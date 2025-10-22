import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ArchiveItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  items: number;
}

const archiveItems: ArchiveItem[] = [
  {
    id: "photos-war",
    title: "Великая Отечественная война",
    category: "Фотографии",
    year: "1941-1945",
    description: "Документальные снимки боевых действий, портреты героев, военная техника",
    items: 1247
  },
  {
    id: "photos-space",
    title: "Космическая программа",
    category: "Фотографии",
    year: "1957-1991",
    description: "Запуски ракет, космонавты, космодромы, научные центры",
    items: 856
  },
  {
    id: "photos-industry",
    title: "Индустриализация",
    category: "Фотографии",
    year: "1928-1940",
    description: "Строительство заводов, фабрик, ГЭС, трудовые будни",
    items: 623
  },
  {
    id: "photos-culture",
    title: "Культура и искусство",
    category: "Фотографии",
    year: "1922-1991",
    description: "Театр, кино, музыка, балет, художники, писатели",
    items: 945
  },
  {
    id: "docs-decrees",
    title: "Декреты и постановления",
    category: "Документы",
    year: "1917-1991",
    description: "Официальные государственные документы, законы, указы",
    items: 2341
  },
  {
    id: "docs-personal",
    title: "Личные дела",
    category: "Документы",
    year: "1922-1991",
    description: "Биографии, автобиографии, характеристики известных деятелей",
    items: 1567
  },
  {
    id: "docs-diplomatic",
    title: "Дипломатическая переписка",
    category: "Документы",
    year: "1922-1991",
    description: "Международные договоры, соглашения, телеграммы",
    items: 892
  },
  {
    id: "docs-economy",
    title: "Экономические отчёты",
    category: "Документы",
    year: "1928-1991",
    description: "Пятилетние планы, производственные показатели, статистика",
    items: 1723
  },
  {
    id: "video-news",
    title: "Кинохроника",
    category: "Видео",
    year: "1922-1991",
    description: "Новостные сюжеты, парады, официальные мероприятия",
    items: 456
  },
  {
    id: "video-docs",
    title: "Документальные фильмы",
    category: "Видео",
    year: "1930-1991",
    description: "Фильмы о событиях, людях, достижениях СССР",
    items: 234
  },
  {
    id: "video-features",
    title: "Художественные фильмы",
    category: "Видео",
    year: "1924-1991",
    description: "Классика советского кинематографа",
    items: 567
  },
  {
    id: "video-edu",
    title: "Образовательные фильмы",
    category: "Видео",
    year: "1930-1991",
    description: "Учебные материалы, научно-популярные фильмы",
    items: 389
  },
  {
    id: "audio-speeches",
    title: "Выступления лидеров",
    category: "Аудио",
    year: "1920-1991",
    description: "Речи политических деятелей, радиообращения",
    items: 312
  },
  {
    id: "audio-music",
    title: "Музыкальные записи",
    category: "Аудио",
    year: "1930-1991",
    description: "Советские песни, симфонии, оперы, народная музыка",
    items: 1456
  },
  {
    id: "audio-radio",
    title: "Радиопередачи",
    category: "Аудио",
    year: "1920-1991",
    description: "Информационные программы, интервью, репортажи",
    items: 723
  },
  {
    id: "audio-literature",
    title: "Художественное чтение",
    category: "Аудио",
    year: "1930-1991",
    description: "Записи чтения классической литературы",
    items: 445
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