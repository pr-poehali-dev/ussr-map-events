import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { MapRegion } from "./HistoricalData";

interface MapTabProps {
  mapRegions: MapRegion[];
  selectedRegion: string | null;
  onRegionSelect: (regionId: string | null) => void;
}

export default function MapTab({ mapRegions, selectedRegion, onRegionSelect }: MapTabProps) {
  const selectedRegionData = mapRegions.find(r => r.id === selectedRegion);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display">Интерактивная карта СССР</CardTitle>
        <CardDescription>Выберите регион для просмотра исторических событий</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative rounded-lg overflow-hidden mb-6 bg-map-gradient border border-primary/20" style={{ height: "600px" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
          <svg 
            className="absolute inset-0 w-full h-full opacity-30" 
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-primary/20"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <Icon name="Map" size={300} className="text-primary" />
          </div>

          {mapRegions.map((region) => (
            <div key={region.id} className="absolute" style={{ left: `${region.x}%`, top: `${region.y}%` }}>
              <button
                onClick={() => onRegionSelect(region.id)}
                className="relative group"
              >
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse ring-4 ring-primary/30 hover:ring-8 transition-all" />
                <div className="absolute left-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-card border border-border rounded-lg p-2 whitespace-nowrap z-10 shadow-lg">
                  <p className="font-semibold text-sm">{region.name}</p>
                  <p className="text-xs text-muted-foreground">{region.events} событий</p>
                </div>
              </button>
            </div>
          ))}
        </div>

        {selectedRegionData && (
          <Card className="border-primary/30 bg-accent/5 animate-fade-in">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="font-display">{selectedRegionData.name}</CardTitle>
                  <CardDescription>{selectedRegionData.description}</CardDescription>
                </div>
                <button
                  onClick={() => onRegionSelect(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Основан</p>
                  <p className="font-semibold">{selectedRegionData.founded}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Население</p>
                  <p className="font-semibold">{selectedRegionData.population}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Значение</p>
                <p className="text-sm">{selectedRegionData.significance}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Ключевые события</p>
                <div className="flex flex-wrap gap-2">
                  {selectedRegionData.keyEvents.map((event, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {event}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <Badge className="bg-soviet-gradient text-white">
                  <Icon name="Archive" size={12} className="mr-1" />
                  {selectedRegionData.events} событий
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
