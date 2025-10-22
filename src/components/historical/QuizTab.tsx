import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";
import { QuizQuestion } from "./HistoricalData";

interface QuizTabProps {
  questions: QuizQuestion[];
  currentQuiz: number;
  selectedAnswer: number | null;
  showResult: boolean;
  score: number;
  selectedCategory: string;
  onAnswerSelect: (answerIndex: number) => void;
  onNextQuestion: () => void;
  onResetQuiz: () => void;
  onCategoryChange: (category: string) => void;
}

export default function QuizTab({
  questions,
  currentQuiz,
  selectedAnswer,
  showResult,
  score,
  selectedCategory,
  onAnswerSelect,
  onNextQuestion,
  onResetQuiz,
  onCategoryChange
}: QuizTabProps) {
  const categories = ["Все темы", ...Array.from(new Set(questions.map(q => q.category)))];
  const progress = ((currentQuiz + 1) / questions.length) * 100;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle className="font-display">Викторина по истории СССР</CardTitle>
              <CardDescription>Проверьте свои знания истории</CardDescription>
            </div>
            <Badge className="bg-soviet-gradient text-white text-lg px-4 py-2">
              <Icon name="Trophy" size={16} className="mr-2" />
              {score} / {questions.length}
            </Badge>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(cat)}
                className={selectedCategory === cat ? "bg-soviet-gradient" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>
        </CardHeader>
      </Card>

      {questions.length > 0 ? (
        <Card className="border-primary/20">
          <CardHeader>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Вопрос {currentQuiz + 1} из {questions.length}</span>
                <Badge variant="outline">{questions[currentQuiz].category}</Badge>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            <CardTitle className="font-display text-xl mt-4">{questions[currentQuiz].question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              {questions[currentQuiz].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && onAnswerSelect(index)}
                  disabled={showResult}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    showResult
                      ? index === questions[currentQuiz].correctAnswer
                        ? "border-green-500 bg-green-500/10"
                        : index === selectedAnswer
                        ? "border-red-500 bg-red-500/10"
                        : "border-border bg-muted/30"
                      : selectedAnswer === index
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50 hover:bg-accent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      showResult && index === questions[currentQuiz].correctAnswer
                        ? "bg-green-500 text-white"
                        : showResult && index === selectedAnswer
                        ? "bg-red-500 text-white"
                        : selectedAnswer === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1">{option}</span>
                    {showResult && index === questions[currentQuiz].correctAnswer && (
                      <Icon name="CheckCircle2" size={20} className="text-green-500" />
                    )}
                    {showResult && index === selectedAnswer && index !== questions[currentQuiz].correctAnswer && (
                      <Icon name="XCircle" size={20} className="text-red-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {showResult && (
              <Card className="border-primary/30 bg-accent/5 animate-fade-in">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Icon 
                      name={selectedAnswer === questions[currentQuiz].correctAnswer ? "CheckCircle2" : "Info"} 
                      size={24} 
                      className={selectedAnswer === questions[currentQuiz].correctAnswer ? "text-green-500" : "text-primary"} 
                    />
                    <div>
                      <p className="font-semibold mb-2">
                        {selectedAnswer === questions[currentQuiz].correctAnswer ? "Правильно!" : "Пояснение:"}
                      </p>
                      <p className="text-sm text-muted-foreground">{questions[currentQuiz].explanation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="flex gap-3">
              {showResult && currentQuiz < questions.length - 1 && (
                <Button onClick={onNextQuestion} className="flex-1 bg-soviet-gradient">
                  Следующий вопрос
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              )}
              {showResult && currentQuiz === questions.length - 1 && (
                <Button onClick={onResetQuiz} className="flex-1 bg-soviet-gradient">
                  <Icon name="RotateCcw" size={16} className="mr-2" />
                  Пройти заново
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <Icon name="AlertCircle" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Нет вопросов в выбранной категории</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
