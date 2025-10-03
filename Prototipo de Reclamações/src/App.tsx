import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { RegisterComplaintScreen } from './components/RegisterComplaintScreen';
import { ProtocolsScreen } from './components/ProtocolsScreen';
import { MapScreen } from './components/MapScreen';
import { ProfileScreen } from './components/ProfileScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'home' | 'register' | 'protocols' | 'map' | 'profile'>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('home');
  };

  const navigate = (screen: 'home' | 'register' | 'protocols' | 'map' | 'profile') => {
    setCurrentScreen(screen);
  };

  return (
    <div className="size-full bg-[#f8f8f8] flex items-center justify-center">
      {/* Mobile Container */}
      <div className="w-full max-w-md h-full bg-white shadow-lg overflow-hidden flex flex-col">
        {/* Screen Content */}
        <div className="flex-1 overflow-auto">
          {!isLoggedIn && currentScreen === 'login' && (
            <LoginScreen onLogin={handleLogin} />
          )}
          {isLoggedIn && currentScreen === 'home' && (
            <HomeScreen onNavigate={navigate} />
          )}
          {isLoggedIn && currentScreen === 'register' && (
            <RegisterComplaintScreen onBack={() => navigate('home')} />
          )}
          {isLoggedIn && currentScreen === 'protocols' && (
            <ProtocolsScreen onBack={() => navigate('home')} />
          )}
          {isLoggedIn && currentScreen === 'map' && (
            <MapScreen onBack={() => navigate('home')} />
          )}
          {isLoggedIn && currentScreen === 'profile' && (
            <ProfileScreen onBack={() => navigate('home')} />
          )}
        </div>

        {/* Bottom Navigation Bar - Only show when logged in and not on login */}
        {isLoggedIn && currentScreen !== 'login' && (
          <div className="h-16 bg-white border-t border-gray-200 flex items-center justify-around px-2">
            <button
              onClick={() => navigate('home')}
              className="flex flex-col items-center gap-1 p-2 flex-1"
            >
              <div className={`w-6 h-6 ${currentScreen === 'home' ? 'text-[#1351B4]' : 'text-gray-400'}`}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className={`text-xs ${currentScreen === 'home' ? 'text-[#1351B4]' : 'text-gray-400'}`}>Início</span>
            </button>
            
            <button
              onClick={() => navigate('protocols')}
              className="flex flex-col items-center gap-1 p-2 flex-1"
            >
              <div className={`w-6 h-6 ${currentScreen === 'protocols' ? 'text-[#1351B4]' : 'text-gray-400'}`}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className={`text-xs ${currentScreen === 'protocols' ? 'text-[#1351B4]' : 'text-gray-400'}`}>Protocolos</span>
            </button>

            <button
              onClick={() => navigate('map')}
              className="flex flex-col items-center gap-1 p-2 flex-1"
            >
              <div className={`w-6 h-6 ${currentScreen === 'map' ? 'text-[#1351B4]' : 'text-gray-400'}`}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <span className={`text-xs ${currentScreen === 'map' ? 'text-[#1351B4]' : 'text-gray-400'}`}>Mapa</span>
            </button>

            <button
              onClick={() => navigate('profile')}
              className="flex flex-col items-center gap-1 p-2 flex-1"
            >
              <div className={`w-6 h-6 ${currentScreen === 'profile' ? 'text-[#1351B4]' : 'text-gray-400'}`}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className={`text-xs ${currentScreen === 'profile' ? 'text-[#1351B4]' : 'text-gray-400'}`}>Perfil</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}