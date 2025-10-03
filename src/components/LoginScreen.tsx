import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { QrCode } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [showLoginForm, setShowLoginForm] = useState(false);

  if (!showLoginForm) {
    return (
      <div className="h-full bg-white flex flex-col items-center justify-center px-8 py-12">
        {/* Logo gov.br */}
        <div className="mb-12">
          <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="55" className="fill-[#1351B4]" style={{ fontSize: '48px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>gov</text>
            <text x="105" y="55" className="fill-[#FFD500]" style={{ fontSize: '48px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>.</text>
            <text x="120" y="55" className="fill-[#168821]" style={{ fontSize: '48px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>b</text>
            <text x="148" y="55" className="fill-[#1351B4]" style={{ fontSize: '48px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>r</text>
          </svg>
        </div>

        {/* Botão principal */}
        <div className="w-full max-w-sm space-y-6">
          <Button 
            onClick={() => setShowLoginForm(true)}
            className="w-full bg-[#1351B4] hover:bg-[#0c3c8f] text-white rounded-full h-14 text-lg"
          >
            Entrar com gov.br
          </Button>

          <p className="text-center text-sm text-gray-600">
            Clique para <span className="text-[#1351B4]">criar</span> ou <span className="text-[#1351B4]">acessar</span> sua conta gov.br
          </p>

          {/* QR Code */}
          <button className="w-full flex items-center justify-center gap-2 text-[#1351B4] pt-8">
            <QrCode size={20} />
            <span className="text-sm">Ler QR Code</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="absolute bottom-8 text-center px-8">
          <p className="text-xs text-gray-500">
            Sistema de Registro de Ocorrências Urbanas
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-[#1351B4] p-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setShowLoginForm(false)} className="text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-white text-lg">Entrar</h2>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 py-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              CPF
            </label>
            <Input
              type="text"
              placeholder="000.000.000-00"
              className="w-full h-12 bg-white border border-gray-300 rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Senha
            </label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              className="w-full h-12 bg-white border border-gray-300 rounded-lg px-4"
            />
          </div>

          <button className="text-sm text-[#1351B4]">
            Esqueci minha senha
          </button>

          <Button 
            onClick={onLogin}
            className="w-full bg-[#1351B4] hover:bg-[#0c3c8f] text-white rounded-full h-14 mt-8"
          >
            Entrar
          </Button>

          <div className="text-center">
            <button className="text-sm text-[#1351B4]">
              Não tem conta? Crie agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}