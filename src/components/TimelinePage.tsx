import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: string;
  icon: string;
  importance: "high" | "medium" | "low";
}

const timelineEvents: TimelineEvent[] = [
  { year: 1917, title: "Октябрьская революция", description: "Большевики свергли Временное правительство", category: "Революция", icon: "Flame", importance: "high" },
  { year: 1922, title: "Образование СССР", description: "Подписан договор об образовании Союза", category: "Политика", icon: "Flag", importance: "high" },
  { year: 1928, title: "Первая пятилетка", description: "Начало индустриализации страны", category: "Экономика", icon: "Factory", importance: "high" },
  { year: 1935, title: "Стахановское движение", description: "Алексей Стаханов перевыполнил норму в 14 раз", category: "Экономика", icon: "TrendingUp", importance: "medium" },
  { year: 1936, title: "Конституция СССР", description: "Принята новая Конституция", category: "Политика", icon: "Scale", importance: "high" },
  { year: 1941, title: "Начало ВОВ", description: "Нацистская Германия напала на СССР", category: "Война", icon: "Shield", importance: "high" },
  { year: 1942, title: "Сталинградская битва", description: "Переломное сражение войны", category: "Война", icon: "Sword", importance: "high" },
  { year: 1943, title: "Курская битва", description: "Крупнейшее танковое сражение", category: "Война", icon: "Zap", importance: "high" },
  { year: 1945, title: "Победа в ВОВ", description: "Германия капитулировала", category: "Война", icon: "Trophy", importance: "high" },
  { year: 1949, title: "Ядерное оружие", description: "СССР провёл испытание атомной бомбы", category: "Наука", icon: "Atom", importance: "high" },
  { year: 1953, title: "Смерть Сталина", description: "Скончался И.В. Сталин", category: "Политика", icon: "AlertCircle", importance: "high" },
  { year: 1956, title: "XX съезд КПСС", description: "Доклад о культе личности Сталина", category: "Политика", icon: "Users", importance: "high" },
  { year: 1957, title: "Первый спутник", description: "Запущен Спутник-1", category: "Космос", icon: "Satellite", importance: "high" },
  { year: 1961, title: "Полёт Гагарина", description: "Первый человек в космосе", category: "Космос", icon: "Rocket", importance: "high" },
  { year: 1963, title: "Полёт Терешковой", description: "Первая женщина в космосе", category: "Космос", icon: "Star", importance: "high" },
  { year: 1965, title: "Выход в открытый космос", description: "Алексей Леонов в открытом космосе", category: "Космос", icon: "Navigation", importance: "high" },
  { year: 1970, title: "Луноход-1", description: "Первый планетоход на Луне", category: "Космос", icon: "Moon", importance: "medium" },
  { year: 1975, title: "Союз-Аполлон", description: "Стыковка советского и американского кораблей", category: "Космос", icon: "Link", importance: "medium" },
  { year: 1980, title: "Олимпиада в Москве", description: "Летние Олимпийские игры", category: "Спорт", icon: "Award", importance: "medium" },
  { year: 1985, title: "Начало перестройки", description: "Горбачёв начал реформы", category: "Политика", icon: "RefreshCw", importance: "high" },
  { year: 1986, title: "Чернобыльская катастрофа", description: "Авария на Чернобыльской АЭС", category: "Катастрофа", icon: "AlertTriangle", importance: "high" },
  { year: 1989, title: "Вывод войск из Афганистана", description: "Завершён вывод советских войск", category: "Война", icon: "Plane", importance: "medium" },
  { year: 1991, title: "Распад СССР", description: "СССР прекратил существование", category: "Политика", icon: "X", importance: "high" }
];

const categories = ["Все", "Революция", "Политика", "Экономика", "Война", "Наука", "Космос", "Спорт", "Катастрофа"];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Революция": "bg-red-500",
    "Политика": "bg-blue-500",
    "Экономика": "bg-green-500",
    "Война": "bg-orange-500",
    "Наука": "bg-purple-500",
    "Космос": "bg-indigo-500",
    "Спорт": "bg-yellow-500",
    "Катастрофа": "bg-gray-500"
  };
  return colors[category] || "bg-gray-500";
};

export default function TimelinePage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const filteredEvents = selectedCategory === "Все" 
    ? timelineEvents 
    : timelineEvents.filter(e => e.category === selectedCategory);

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
            Временная шкала СССР
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Хронология ключевых событий 1917-1991 годов
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-800 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {filteredEvents.map((event, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={`${event.year}-${event.title}`}
                    className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                  >
                    <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
                      <Card
                        className="group cursor-pointer hover:shadow-2xl transition-all hover:scale-105 border-2 border-primary/20"
                        onClick={() => setSelectedEvent(event)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <Badge className={`${getCategoryColor(event.category)} text-white`}>
                              {event.category}
                            </Badge>
                            <div className={`w-10 h-10 rounded-full ${getCategoryColor(event.category)}/10 flex items-center justify-center`}>
                              <Icon name={event.icon as any} size={20} className={getCategoryColor(event.category).replace('bg-', 'text-')} />
                            </div>
                          </div>
                          <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {event.description}
                          </p>
                          {event.importance === "high" && (
                            <div className="mt-3 flex items-center gap-2 text-xs text-primary">
                              <Icon name="Star" size={14} />
                              <span>Важное событие</span>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>

                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <div className={`w-20 h-20 rounded-full ${getCategoryColor(event.category)} flex items-center justify-center shadow-lg border-4 border-background`}>
                        <span className="text-white font-bold text-sm">{event.year}</span>
                      </div>
                    </div>

                    <div className="hidden md:block w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedEvent(null)}>
            <Card className="max-w-2xl w-full border-2 border-primary/20" onClick={(e) => e.stopPropagation()}>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-full ${getCategoryColor(selectedEvent.category)} flex items-center justify-center shadow-lg`}>
                      <Icon name={selectedEvent.icon as any} size={28} className="text-white" />
                    </div>
                    <div>
                      <Badge className={`${getCategoryColor(selectedEvent.category)} text-white mb-2`}>
                        {selectedEvent.category}
                      </Badge>
                      <h2 className="font-display text-3xl font-bold">{selectedEvent.year}</h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>

                <h3 className="font-display text-2xl font-bold mb-4">{selectedEvent.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {selectedEvent.description}
                </p>

                {selectedEvent.importance === "high" && (
                  <div className="bg-primary/10 rounded-lg p-4 flex items-center gap-3">
                    <Icon name="Star" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold text-primary">Ключевое событие</p>
                      <p className="text-sm text-muted-foreground">Это событие имело важнейшее значение для истории СССР</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}