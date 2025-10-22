import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HistoricalEvent } from "./HistoricalData";

interface TimelineTabProps {
  events: HistoricalEvent[];
}

export default function TimelineTab({ events }: TimelineTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display">Хронология событий</CardTitle>
        <CardDescription>Ключевые моменты истории СССР</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            {events
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
  );
}
