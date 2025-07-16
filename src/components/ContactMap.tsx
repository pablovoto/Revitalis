import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { clinicLocations } from '../data/contactData';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React Leaflet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ContactMap = () => {
  useEffect(() => {
    // Asegurar que el mapa se renderice correctamente
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }, []);

  // Centro del mapa (entre las dos ubicaciones)
  const mapCenter: [number, number] = [-26.8204, -65.2697];

  return (
    <div className="h-64 w-full rounded-lg overflow-hidden z-10">
      <MapContainer
        center={mapCenter}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {clinicLocations.map((clinic) => (
          <Marker key={clinic.id} position={clinic.position}>
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold text-primary mb-2">{clinic.name}</h3>
                <p className="text-sm text-base-content/70">{clinic.address}</p>
                <div className="mt-2">
                  <a
                    href={clinic.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm bg-primary !text-black "
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ContactMap;
