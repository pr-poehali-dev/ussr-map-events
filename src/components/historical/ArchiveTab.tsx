import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function ArchiveTab() {
  const categories = [
    "Документальные фотографии", 
    "Архивные документы", 
    "Видеоматериалы", 
    "Аудиозаписи"
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {categories.map((category, index) => (
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
      ))}
    </div>
  );
}
