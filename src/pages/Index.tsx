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

const historicalEvents: HistoricalEvent[] = [
  {
    id: "1",
    year: 1922,
    title: "Образование СССР",
    description: "30 декабря был подписан договор об образовании Союза Советских Социалистических Республик",
    region: "Москва",
    category: "Политика"
  },
  {
    id: "2",
    year: 1941,
    title: "Начало Великой Отечественной войны",
    description: "22 июня нацистская Германия напала на СССР, началась Великая Отечественная война",
    region: "Вся страна",
    category: "Война"
  },
  {
    id: "3",
    year: 1961,
    title: "Полёт Юрия Гагарина",
    description: "12 апреля состоялся первый полёт человека в космос на корабле 'Восток-1'",
    region: "Байконур",
    category: "Космос"
  },
  {
    id: "4",
    year: 1945,
    title: "Победа в Великой Отечественной войне",
    description: "9 мая Германия капитулировала, завершилась Великая Отечественная война",
    region: "Берлин",
    category: "Война"
  },
  {
    id: "5",
    year: 1957,
    title: "Запуск первого спутника",
    description: "4 октября СССР запустил первый искусственный спутник Земли 'Спутник-1'",
    region: "Байконур",
    category: "Космос"
  }
];

const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "В каком году был образован СССР?",
    options: ["1917", "1922", "1924", "1925"],
    correctAnswer: 1,
    explanation: "СССР был образован 30 декабря 1922 года путём подписания договора четырьмя республиками."
  },
  {
    id: "q2",
    question: "Кто был первым космонавтом в истории?",
    options: ["Герман Титов", "Юрий Гагарин", "Валентина Терешкова", "Алексей Леонов"],
    correctAnswer: 1,
    explanation: "Юрий Гагарин совершил первый полёт в космос 12 апреля 1961 года на корабле 'Восток-1'."
  },
  {
    id: "q3",
    question: "Когда началась Великая Отечественная война?",
    options: ["1939", "1940", "1941", "1942"],
    correctAnswer: 2,
    explanation: "Великая Отечественная война началась 22 июня 1941 года с нападения нацистской Германии на СССР."
  },
  {
    id: "q4",
    question: "В каком году СССР запустил первый искусственный спутник Земли?",
    options: ["1955", "1957", "1960", "1961"],
    correctAnswer: 1,
    explanation: "Первый искусственный спутник 'Спутник-1' был запущен 4 октября 1957 года."
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

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    if (answerIndex === quizQuestions[currentQuiz].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuiz < quizQuestions.length - 1) {
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
          <TabsList className="grid w-full grid-cols-4 mb-8">
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
                <div className="relative rounded-lg overflow-hidden mb-6 bg-muted/30" style={{ height: "600px" }}>
                  <img 
                    src="https://cdn.poehali.dev/projects/dca6cab3-3bc0-4c42-9294-300bd101762c/files/467927c3-822b-40af-a0a1-008b12f88180.jpg"
                    alt="Карта СССР"
                    className="w-full h-full object-contain"
                  />
                  {mapRegions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegion(region.id)}
                      className={`absolute w-6 h-6 rounded-full transition-all hover:scale-150 ${
                        selectedRegion === region.id
                          ? "bg-primary ring-4 ring-primary/30 scale-150 shadow-lg"
                          : "bg-secondary hover:bg-primary shadow-md"
                      }`}
                      style={{ left: `${region.x}%`, top: `${region.y}%` }}
                    >
                      <span className="sr-only">{region.name}</span>
                    </button>
                  ))}
                  {mapRegions.map((region) => (
                    <div
                      key={`label-${region.id}`}
                      className="absolute text-sm font-bold pointer-events-none bg-white/90 px-2 py-1 rounded shadow-sm"
                      style={{ left: `${region.x}%`, top: `${region.y - 7}%` }}
                    >
                      {region.name}
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
                  Вопрос {currentQuiz + 1} из {quizQuestions.length}
                </CardDescription>
                <Progress value={((currentQuiz + 1) / quizQuestions.length) * 100} className="mt-2" />
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">{quizQuestions[currentQuiz].question}</h3>
                  <div className="grid gap-3">
                    {quizQuestions[currentQuiz].options.map((option, index) => (
                      <Button
                        key={index}
                        variant={
                          showResult
                            ? index === quizQuestions[currentQuiz].correctAnswer
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
                        {showResult && index === quizQuestions[currentQuiz].correctAnswer && (
                          <Icon name="CheckCircle2" className="ml-auto" size={20} />
                        )}
                        {showResult &&
                          selectedAnswer === index &&
                          index !== quizQuestions[currentQuiz].correctAnswer && (
                            <Icon name="XCircle" className="ml-auto" size={20} />
                          )}
                      </Button>
                    ))}
                  </div>
                </div>

                {showResult && (
                  <Card className="bg-muted animate-scale-in">
                    <CardContent className="pt-6">
                      <p className="text-sm">{quizQuestions[currentQuiz].explanation}</p>
                      <div className="flex gap-3 mt-4">
                        {currentQuiz < quizQuestions.length - 1 ? (
                          <Button onClick={nextQuestion}>
                            Следующий вопрос
                            <Icon name="ArrowRight" className="ml-2" size={16} />
                          </Button>
                        ) : (
                          <div className="w-full">
                            <p className="text-lg font-semibold mb-3">
                              Ваш результат: {score} из {quizQuestions.length}
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