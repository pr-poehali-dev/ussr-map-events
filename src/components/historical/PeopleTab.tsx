import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { HistoricalFigure } from "./HistoricalData";

interface PeopleTabProps {
  figures: HistoricalFigure[];
}

export default function PeopleTab({ figures }: PeopleTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display">Известные личности СССР</CardTitle>
        <CardDescription>Великие люди, изменившие ход истории</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {figures.map((figure) => (
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
  );
}
