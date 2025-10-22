import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import MapTab from "@/components/historical/MapTab";
import QuizTab from "@/components/historical/QuizTab";
import TimelineTab from "@/components/historical/TimelineTab";
import PeopleTab from "@/components/historical/PeopleTab";
import ArchiveTab from "@/components/historical/ArchiveTab";
import { 
  historicalEvents, 
  quizQuestions, 
  mapRegions, 
  historicalFigures 
} from "@/components/historical/HistoricalData";

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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
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
            <MapTab 
              mapRegions={mapRegions} 
              selectedRegion={selectedRegion}
              onRegionSelect={setSelectedRegion}
            />
          </TabsContent>

          <TabsContent value="quiz" className="space-y-6 animate-fade-in">
            <QuizTab
              questions={filteredQuestions}
              currentQuiz={currentQuiz}
              selectedAnswer={selectedAnswer}
              showResult={showResult}
              score={score}
              selectedCategory={selectedCategory}
              onAnswerSelect={handleAnswerSelect}
              onNextQuestion={nextQuestion}
              onResetQuiz={resetQuiz}
              onCategoryChange={handleCategoryChange}
            />
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6 animate-fade-in">
            <TimelineTab events={historicalEvents} />
          </TabsContent>

          <TabsContent value="people" className="space-y-6 animate-fade-in">
            <PeopleTab figures={historicalFigures} />
          </TabsContent>

          <TabsContent value="archive" className="space-y-6 animate-fade-in">
            <ArchiveTab />
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