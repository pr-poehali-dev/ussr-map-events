import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface Collection {
  id: string;
  title: string;
  description: string;
  period: string;
  itemsCount: number;
  categories: string[];
  coverImage: string;
  highlights: string[];
  icon: string;
}

const collections: Collection[] = [
  {
    id: "ww2",
    title: "Великая Отечественная война",
    description: "Полная хроника войны 1941-1945: от первого дня до Победы. Фотографии боёв, документы командования, личные истории героев.",
    period: "1941-1945",
    itemsCount: 2847,
    categories: ["Фотографии", "Документы", "Видео", "Аудио"],
    coverImage: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?w=600",
    highlights: [
      "Битва за Москву - 156 материалов",
      "Сталинградская битва - 234 материала",
      "Блокада Ленинграда - 189 материалов",
      "Курская дуга - 167 материалов",
      "Взятие Берлина - 189 материалов"
    ],
    icon: "Shield"
  },
  {
    id: "space",
    title: "Космическая эра СССР",
    description: "От первого спутника до орбитальных станций. Уникальные снимки, документы космической программы, интервью с космонавтами.",
    period: "1957-1991",
    itemsCount: 1523,
    categories: ["Фотографии", "Документы", "Видео"],
    coverImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600",
    highlights: [
      "Спутник-1 и начало космической эры",
      "Юрий Гагарин - первый полёт",
      "Валентина Терешкова в космосе",
      "Программа 'Луна' и луноходы",
      "Орбитальная станция 'Мир'"
    ],
    icon: "Rocket"
  },
  {
    id: "industry",
    title: "Индустриализация страны",
    description: "Превращение аграрной страны в промышленную державу. Строительство заводов, ГЭС, транспортных магистралей.",
    period: "1928-1940",
    itemsCount: 1456,
    categories: ["Фотографии", "Документы"],
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
    highlights: [
      "Магнитогорский металлургический комбинат",
      "Днепрогэс - энергия страны",
      "Московский метрополитен",
      "Челябинский тракторный завод",
      "Турксиб - магистраль в Азию"
    ],
    icon: "Factory"
  },
  {
    id: "culture",
    title: "Культура и искусство",
    description: "Золотой век советской культуры: кино, театр, музыка, балет. Великие произведения и их создатели.",
    period: "1922-1991",
    itemsCount: 2134,
    categories: ["Фотографии", "Видео", "Аудио"],
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    highlights: [
      "Большой театр - великие постановки",
      "Классика советского кинематографа",
      "Симфонии Шостаковича",
      "Балет Галины Улановой",
      "ВДНХ - достижения страны"
    ],
    icon: "Music"
  },
  {
    id: "science",
    title: "Наука и технологии",
    description: "Научные прорывы СССР: атомный проект, физика, химия, медицина. Истории великих учёных и их открытий.",
    period: "1922-1991",
    itemsCount: 1678,
    categories: ["Фотографии", "Документы", "Видео"],
    coverImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600",
    highlights: [
      "Атомный проект - Курчатов и Сахаров",
      "Нобелевские лауреаты СССР",
      "Первая атомная электростанция",
      "Достижения в физике и химии",
      "Медицинские открытия"
    ],
    icon: "Atom"
  },
  {
    id: "leaders",
    title: "Лидеры и политики",
    description: "Руководители СССР и их эпохи: от Ленина до Горбачёва. Документы, речи, исторические решения.",
    period: "1917-1991",
    itemsCount: 1234,
    categories: ["Фотографии", "Документы", "Аудио"],
    coverImage: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600",
    highlights: [
      "Владимир Ленин - основатель СССР",
      "Эпоха Сталина",
      "Хрущёвская оттепель",
      "Брежневский застой",
      "Перестройка Горбачёва"
    ],
    icon: "Crown"
  }
];

export default function CollectionsPage() {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b-2 border-red-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-lg bg-soviet-gradient flex items-center justify-center shadow-md">
                <Icon name="Star" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-display text-red-800">История СССР</h1>
                <p className="text-sm text-red-600">Интерактивный исторический портал</p>
              </div>
            </Link>
            <nav className="flex gap-2">
              <Link to="/collections">
                <Button variant="ghost" className="gap-2">
                  <Icon name="Library" size={18} />
                  Коллекции
                </Button>
              </Link>
              <Link to="/timeline">
                <Button variant="ghost" className="gap-2">
                  <Icon name="Clock" size={18} />
                  Хронология
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost" className="gap-2">
                  <Icon name="Info" size={18} />
                  О проекте
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="font-display text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Тематические коллекции
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Отобранные и систематизированные материалы по ключевым темам истории СССР
          </p>
        </div>

        {selectedCollection ? (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedCollection(null)}
              className="mb-6 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Icon name="ArrowLeft" size={20} />
              <span>Вернуться к коллекциям</span>
            </button>

            <Card className="border-2 border-primary/20">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <img
                  src={selectedCollection.coverImage}
                  alt={selectedCollection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name={selectedCollection.icon as any} size={40} />
                    <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm">
                      {selectedCollection.period}
                    </Badge>
                  </div>
                  <h2 className="font-display text-4xl font-bold mb-2">
                    {selectedCollection.title}
                  </h2>
                  <p className="text-lg text-white/90">
                    {selectedCollection.itemsCount.toLocaleString('ru-RU')} материалов
                  </p>
                </div>
              </div>

              <CardContent className="p-8 space-y-8">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {selectedCollection.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Layers" size={20} className="text-primary" />
                    Типы материалов
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCollection.categories.map((category) => (
                      <Badge key={category} variant="outline" className="bg-primary/5">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Star" size={20} className="text-primary" />
                    Основные разделы
                  </h3>
                  <ul className="space-y-3">
                    {selectedCollection.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="ChevronRight" size={20} className="text-primary mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <Card
                key={collection.id}
                className="group cursor-pointer hover:shadow-2xl transition-all hover:scale-105 border-primary/20 overflow-hidden"
                onClick={() => setSelectedCollection(collection)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={collection.coverImage}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon name={collection.icon as any} className="text-primary" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm mb-2">
                      {collection.period}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                    {collection.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {collection.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Icon name="Archive" size={16} className="text-primary" />
                      {collection.itemsCount.toLocaleString('ru-RU')} материалов
                    </span>
                    <Icon name="ArrowRight" size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {collection.categories.map((category) => (
                      <Badge key={category} variant="outline" className="text-xs bg-primary/5">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}