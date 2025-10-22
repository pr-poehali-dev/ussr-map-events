import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AboutPage() {
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
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            О проекте
          </h1>
          <p className="text-xl text-muted-foreground">
            Цифровой архив истории Советского Союза
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Target" className="text-primary" size={28} />
                <CardTitle className="font-display text-2xl">Наша миссия</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Архив СССР создан для сохранения и популяризации исторического наследия Советского Союза. 
                Мы стремимся предоставить доступ к уникальным материалам, которые помогут современному 
                поколению лучше понять события 1917-1991 годов.
              </p>
              <p>
                Наша цель — сделать историю доступной каждому через современные цифровые технологии, 
                сохранив объективность и научную достоверность представленных материалов.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Library" className="text-primary" size={28} />
                <CardTitle className="font-display text-2xl">Что мы предлагаем</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Image" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Фотоархив</h3>
                    <p className="text-sm text-muted-foreground">
                      Более 3,600 документальных снимков войны, космической программы, индустриализации и культуры
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="FileText" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Документы</h3>
                    <p className="text-sm text-muted-foreground">
                      Более 6,500 официальных документов, декретов, личных дел и дипломатической переписки
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Video" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Видеоматериалы</h3>
                    <p className="text-sm text-muted-foreground">
                      Более 1,600 единиц кинохроники, документальных и художественных фильмов
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Volume2" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Аудиозаписи</h3>
                    <p className="text-sm text-muted-foreground">
                      Более 2,900 записей речей лидеров, музыкальных произведений и радиопередач
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Users" className="text-primary" size={28} />
                <CardTitle className="font-display text-2xl">Для кого этот проект</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Icon name="GraduationCap" className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Для студентов и школьников</h4>
                    <p className="text-sm">Образовательные материалы для изучения истории СССР</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="BookOpen" className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Для исследователей</h4>
                    <p className="text-sm">Первоисточники и документы для научных работ</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="Heart" className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Для всех интересующихся историей</h4>
                    <p className="text-sm">Увлекательные материалы о жизни и достижениях советской эпохи</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Database" className="text-primary" size={28} />
                <CardTitle className="font-display text-2xl">Источники материалов</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Материалы архива собраны из открытых государственных архивов, музеев, библиотек 
                и научных учреждений России и стран бывшего СССР. Все документы и фотографии 
                прошли проверку на подлинность и историческую достоверность.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Основные источники:</strong> РГАСПИ, РГАКФД, Музей космонавтики, 
                  Центральный музей Вооруженных Сил, Государственный архив РФ
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-red-50/50 to-background">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Mail" className="text-primary" size={28} />
                <CardTitle className="font-display text-2xl">Свяжитесь с нами</CardTitle>
              </div>
              <CardDescription>
                Если у вас есть предложения, материалы для архива или вопросы
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>archive@ussr-history.ru</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Globe" size={20} className="text-primary" />
                  <span>www.ussr-history.ru</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}