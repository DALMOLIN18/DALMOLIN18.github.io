import { Zap, Droplets, Trash2, Wrench, AlertCircle, MapPin } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: 'home' | 'register' | 'protocols' | 'map' | 'profile') => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const problems = [
    { id: 1, icon: Zap, label: 'Falta de energia', color: 'bg-[#FFD500]', textColor: 'text-gray-900' },
    { id: 2, icon: Droplets, label: 'Falta d\'água', color: 'bg-[#1351B4]', textColor: 'text-white' },
    { id: 3, icon: Trash2, label: 'Problema com lixo', color: 'bg-[#168821]', textColor: 'text-white' },
    { id: 4, icon: Wrench, label: 'Manutenção', color: 'bg-gray-600', textColor: 'text-white' },
    { id: 5, icon: AlertCircle, label: 'Buraco na rua', color: 'bg-orange-500', textColor: 'text-white' },
    { id: 6, icon: MapPin, label: 'Sinalização', color: 'bg-purple-600', textColor: 'text-white' },
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-[#1351B4] p-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/80 text-sm">Olá,</p>
            <h2 className="text-white text-xl">João da Silva</h2>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 overflow-auto">
        <h3 className="mb-4">Registrar nova ocorrência</h3>
        <p className="text-sm text-gray-600 mb-6">Selecione o tipo de problema:</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          {problems.map((problem) => (
            <button
              key={problem.id}
              onClick={() => onNavigate('register')}
              className="bg-white border-2 border-gray-200 hover:border-[#1351B4] rounded-2xl p-6 flex flex-col items-center gap-3 transition-all active:scale-95"
            >
              <div className={`${problem.color} ${problem.textColor} w-14 h-14 rounded-full flex items-center justify-center`}>
                <problem.icon size={28} />
              </div>
              <span className="text-sm text-center text-gray-900">{problem.label}</span>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-[#f8f8f8] border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h4>Suas ocorrências</h4>
            <button 
              onClick={() => onNavigate('protocols')}
              className="text-sm text-[#1351B4]"
            >
              Ver todas
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl text-[#FFD500]">3</div>
              <div className="text-xs text-gray-600 mt-1">Pendentes</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl text-[#1351B4]">2</div>
              <div className="text-xs text-gray-600 mt-1">Em análise</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl text-[#168821]">5</div>
              <div className="text-xs text-gray-600 mt-1">Resolvidas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}