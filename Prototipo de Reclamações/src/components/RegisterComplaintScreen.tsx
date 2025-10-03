import { useState } from 'react';
import { ArrowLeft, Camera, MapPin, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface RegisterComplaintScreenProps {
  onBack: () => void;
}

export function RegisterComplaintScreen({ onBack }: RegisterComplaintScreenProps) {
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      onBack();
    }, 2500);
  };

  if (showSuccess) {
    return (
      <div className="h-full bg-white flex flex-col items-center justify-center p-8">
        <div className="w-20 h-20 bg-[#168821] rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={48} className="text-white" />
        </div>
        <h3 className="text-xl text-center mb-3">Ocorrência registrada com sucesso!</h3>
        <div className="bg-[#f8f8f8] border border-gray-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-gray-600 text-center mb-1">Número do protocolo</p>
          <p className="text-2xl text-[#1351B4] text-center">#{Math.floor(Math.random() * 100000)}</p>
        </div>
        <p className="text-sm text-gray-600 text-center">
          Você pode acompanhar o andamento na seção "Protocolos"
        </p>
      </div>
    );
  }

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-[#1351B4] p-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-white text-lg">Nova ocorrência</h2>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 py-6 overflow-auto">
        <div className="space-y-5">
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Tipo de ocorrência *
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full h-12 bg-white border border-gray-300 rounded-lg">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="energia">Falta de energia</SelectItem>
                <SelectItem value="agua">Falta d'água</SelectItem>
                <SelectItem value="lixo">Problema com lixo</SelectItem>
                <SelectItem value="manutencao">Manutenção</SelectItem>
                <SelectItem value="buraco">Buraco na rua</SelectItem>
                <SelectItem value="sinalizacao">Sinalização</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Endereço *
            </label>
            <div className="relative">
              <Input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Digite o endereço"
                className="w-full h-12 bg-white border border-gray-300 rounded-lg px-4 pr-12"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1351B4]">
                <MapPin size={20} />
              </button>
            </div>
            <button className="text-sm text-[#1351B4] mt-2 flex items-center gap-1">
              <MapPin size={14} />
              Usar minha localização atual
            </button>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Descrição do problema *
            </label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva detalhadamente o problema encontrado..."
              className="w-full bg-white border border-gray-300 rounded-lg min-h-[120px] p-4"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Adicionar foto (opcional)
            </label>
            <button className="w-full bg-[#f8f8f8] hover:bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center gap-3 transition-colors">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-300">
                <Camera size={24} className="text-gray-400" />
              </div>
              <span className="text-sm text-gray-600">Tirar foto ou escolher da galeria</span>
            </button>
          </div>

          <Button 
            onClick={handleSubmit}
            className="w-full bg-[#168821] hover:bg-[#0f6218] text-white rounded-full h-14 mt-8"
          >
            Registrar ocorrência
          </Button>
        </div>
      </div>
    </div>
  );
}