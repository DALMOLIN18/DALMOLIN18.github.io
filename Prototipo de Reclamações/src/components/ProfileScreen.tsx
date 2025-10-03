import { ArrowLeft, User, Mail, Phone, FileText, Edit2, LogOut, Lock, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';

interface ProfileScreenProps {
  onBack: () => void;
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-[#1351B4] p-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-white text-lg">Meu perfil</h2>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="flex-1 px-6 overflow-auto">
        {/* Avatar */}
        <div className="flex flex-col items-center -mt-12 mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-[#1351B4] to-[#0c3c8f] rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white">
            <User size={40} />
          </div>
          <h3 className="mt-4">João da Silva</h3>
          <p className="text-sm text-gray-600">CPF: 123.456.789-09</p>
          <button className="mt-2 text-sm text-[#1351B4]">Editar perfil</button>
        </div>

        {/* Personal Data */}
        <div className="space-y-4">
          <h4 className="text-sm text-gray-600 mb-4">DADOS PESSOAIS</h4>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-[#f8f8f8] rounded-full flex items-center justify-center">
                  <User size={20} className="text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Nome completo</p>
                  <p className="text-sm">João da Silva</p>
                </div>
              </div>
              <button className="text-[#1351B4]">
                <Edit2 size={18} />
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-[#f8f8f8] rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">E-mail</p>
                  <p className="text-sm">joao.silva@email.com</p>
                </div>
              </div>
              <button className="text-[#1351B4]">
                <Edit2 size={18} />
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-[#f8f8f8] rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Telefone</p>
                  <p className="text-sm">(11) 98765-4321</p>
                </div>
              </div>
              <button className="text-[#1351B4]">
                <Edit2 size={18} />
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-[#f8f8f8] rounded-full flex items-center justify-center">
                  <FileText size={20} className="text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">CPF</p>
                  <p className="text-sm">123.456.789-09</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <h4 className="text-sm text-gray-600 mt-8 mb-4">CONFIGURAÇÕES</h4>
          
          <button className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-[#f8f8f8] rounded-full flex items-center justify-center">
              <Lock size={20} className="text-gray-600" />
            </div>
            <span className="flex-1 text-left text-sm">Alterar senha</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" className="text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-[#f8f8f8] rounded-full flex items-center justify-center">
              <HelpCircle size={20} className="text-gray-600" />
            </div>
            <span className="flex-1 text-left text-sm">Ajuda e suporte</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" className="text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button className="w-full bg-white border-2 border-red-200 rounded-xl p-4 flex items-center gap-3 hover:bg-red-50 transition-colors mt-6 mb-8">
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
              <LogOut size={20} className="text-red-600" />
            </div>
            <span className="flex-1 text-left text-sm text-red-600">Sair da conta</span>
          </button>
        </div>
      </div>
    </div>
  );
}