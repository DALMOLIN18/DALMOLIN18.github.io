import { ArrowLeft, Clock, CheckCircle, AlertCircle, Eye } from 'lucide-react';

interface ProtocolsScreenProps {
  onBack: () => void;
}

export function ProtocolsScreen({ onBack }: ProtocolsScreenProps) {
  const protocols = [
    {
      id: '#34521',
      type: 'Falta de energia',
      address: 'Rua Perimetral, 123 - Centro',
      date: '25/09/2025',
      status: 'em-andamento',
      statusLabel: 'Em andamento',
      color: 'text-[#FFD500]',
      bgColor: 'bg-[#FFD500]/10',
      borderColor: 'border-[#FFD500]/30'
    },
    {
      id: '#34498',
      type: 'Limpeza pública',
      address: 'Rua Principal, 456 - Jardim',
      date: '22/09/2025',
      status: 'em-analise',
      statusLabel: 'Em análise',
      color: 'text-[#1351B4]',
      bgColor: 'bg-[#1351B4]/10',
      borderColor: 'border-[#1351B4]/30'
    },
    {
      id: '#34287',
      type: 'Falta d\'água',
      address: 'Av. Central, 789 - Vila Nova',
      date: '18/09/2025',
      status: 'resolvido',
      statusLabel: 'Resolvido',
      color: 'text-[#168821]',
      bgColor: 'bg-[#168821]/10',
      borderColor: 'border-[#168821]/30'
    },
    {
      id: '#34156',
      type: 'Buraco na rua',
      address: 'Rua dos Pinheiros, 321 - Bairro Alto',
      date: '15/09/2025',
      status: 'resolvido',
      statusLabel: 'Resolvido',
      color: 'text-[#168821]',
      bgColor: 'bg-[#168821]/10',
      borderColor: 'border-[#168821]/30'
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'em-andamento':
        return <Clock size={20} className="text-[#FFD500]" />;
      case 'em-analise':
        return <AlertCircle size={20} className="text-[#1351B4]" />;
      case 'resolvido':
        return <CheckCircle size={20} className="text-[#168821]" />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-[#1351B4] p-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-white text-lg">Meus protocolos</h2>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Protocols List */}
      <div className="flex-1 px-6 py-6 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">{protocols.length} ocorrências registradas</p>
          <button className="text-sm text-[#1351B4]">Filtrar</button>
        </div>
        
        <div className="space-y-4">
          {protocols.map((protocol) => (
            <div
              key={protocol.id}
              className={`bg-white border-2 ${protocol.borderColor} rounded-xl p-4 transition-all hover:shadow-md`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  {getStatusIcon(protocol.status)}
                  <span className={`${protocol.color}`}>{protocol.id}</span>
                </div>
                <div className={`${protocol.bgColor} ${protocol.color} px-3 py-1 rounded-full text-xs`}>
                  {protocol.statusLabel}
                </div>
              </div>
              
              <h4 className="mb-2">{protocol.type}</h4>
              <p className="text-sm text-gray-600 mb-2">{protocol.address}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-400">Registrado em {protocol.date}</p>
                <button className="text-[#1351B4] flex items-center gap-1 text-sm">
                  <Eye size={16} />
                  Ver detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 bg-[#f8f8f8] border border-gray-200 rounded-xl p-5">
          <h4 className="mb-4">Resumo geral</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#1351B4] rounded-full"></div>
                <span className="text-sm text-gray-700">Em análise</span>
              </div>
              <span className="text-sm">1</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#FFD500] rounded-full"></div>
                <span className="text-sm text-gray-700">Em andamento</span>
              </div>
              <span className="text-sm">1</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#168821] rounded-full"></div>
                <span className="text-sm text-gray-700">Resolvidas</span>
              </div>
              <span className="text-sm">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}