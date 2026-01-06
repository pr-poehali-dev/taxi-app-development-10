import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface MapComponentProps {
  onLocationSelect?: (lat: number, lng: number) => void;
}

function LocationMarker() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const map = useMap();

  useEffect(() => {
    map.locate();
    
    map.on('locationfound', (e) => {
      setPosition([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, 13);
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Вы здесь</Popup>
    </Marker>
  );
}

export default function MapComponent({ onLocationSelect }: MapComponentProps) {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  
  const kurganCenter: [number, number] = [55.4500, 65.3333];

  const handleGetLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setUserLocation([lat, lng]);
          setIsLocating(false);
          if (onLocationSelect) {
            onLocationSelect(lat, lng);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLocating(false);
        }
      );
    }
  };

  return (
    <div className="relative w-full h-64 rounded-2xl overflow-hidden border-2 border-muted shadow-lg">
      <MapContainer
        center={userLocation || kurganCenter}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>Ваше местоположение</Popup>
          </Marker>
        )}
      </MapContainer>
      
      <Button
        onClick={handleGetLocation}
        disabled={isLocating}
        className="absolute bottom-4 right-4 z-[1000] bg-white hover:bg-white/90 text-primary border-2 border-primary/20 shadow-lg"
        size="sm"
      >
        <Icon name={isLocating ? 'Loader2' : 'Navigation'} size={16} className={`mr-2 ${isLocating ? 'animate-spin' : ''}`} />
        {isLocating ? 'Определяю...' : 'Моя позиция'}
      </Button>
    </div>
  );
}
