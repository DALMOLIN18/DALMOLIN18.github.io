import { ArrowLeft, MapPin, Filter } from 'lucide-react';

interface MapScreenProps {
  onBack: () => void;
}

export function MapScreen({ onBack }: MapScreenProps) {
  const markers = [
    { id: 1, type: 'Falta de energia', color: 'bg-[#FFD500]', top: '30%', left: '40%', protocol: '#34521' },
    { id: 2, type: 'Falta d\'água', color: 'bg-[#1351B4]', top: '50%', left: '60%', protocol: '#34287' },
    { id: 3, type: 'Problema com lixo', color: 'bg-[#168821]', top: '65%', left: '35%', protocol: '#34498' },
    { id: 4, type: 'Buraco na rua', color: 'bg-orange-500', top: '40%', left: '70%', protocol: '#34156' },
    { id: 5, type: 'Manutenção', color: 'bg-gray-600', top: '55%', left: '45%', protocol: '#34423' },
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-[#1351B4] p-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-white text-lg">Mapa de ocorrências</h2>
          <button className="text-white">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 bg-[#e8edf2] relative overflow-hidden">
        {/* Simplified Map Background */}
        <div className="absolute inset-0">
          {/* Grid pattern to simulate map */}
          <div className="w-full h-full" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(180, 190, 200, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(180, 190, 200, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          >
            {/* Street-like lines */}
            <svg className="w-full h-full" style={{ position: 'absolute' }}>
              <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#cbd5e0" strokeWidth="2" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#cbd5e0" strokeWidth="3" />
              <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#cbd5e0" strokeWidth="2" />
              <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#cbd5e0" strokeWidth="2" />
              <line x1="0" y1="55%" x2="100%" y2="55%" stroke="#cbd5e0" strokeWidth="3" />
              <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#cbd5e0" strokeWidth="2" />
            </svg>

            {/* Markers */}
            {markers.map((marker) => (
              <div
                key={marker.id}
                className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer hover:scale-110 transition-transform group"
                style={{ top: marker.top, left: marker.left }}
              >
                <div className="relative">
                  {/* Marker pin */}
                  <div className={`${marker.color} w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-3 border-white relative z-10`}>
                    <MapPin size={20} className="text-white" fill="white" />
                  </div>
                  {/* Pulse animation */}
                  <div className={`${marker.color} absolute top-0 left-0 w-10 h-10 rounded-full opacity-40 animate-ping`}></div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                    <p className="text-xs mb-1">{marker.protocol}</p>
                    <p className="text-xs text-gray-600">{marker.type}</p>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm">Legenda</h4>
            <p className="text-xs text-gray-500">{markers.length} ocorrências</p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#FFD500] rounded-full"></div>
              <span className="text-gray-700">Energia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#1351B4] rounded-full"></div>
              <span className="text-gray-700">Água</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#168821] rounded-full"></div>
              <span className="text-gray-700">Lixo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">Vias</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <span className="text-gray-700">Manutenção</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <span className="text-gray-700">Sinalização</span>
            </div>
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 border-b border-gray-200 transition-colors">
            <span className="text-xl text-gray-700">+</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <span className="text-xl text-gray-700">−</span>
          </button>
        </div>

        {/* Current location button */}
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg border border-gray-200">
          <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <MapPin size={20} className="text-[#1351B4]" />
          </button>
        </div>
      </div>
    </div>
  );
}