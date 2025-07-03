import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation Menu */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h1 className="text-xl font-bold text-gray-900">Time Tracker Pro</h1>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                to="/app"
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-all duration-200"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Zaloguj się
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Time Tracker</span> Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Profesjonalny system do ewidencji czasu pracy
              <br />
              <span className="text-lg text-gray-500">Zarządzaj czasem pracy swojego zespołu efektywnie</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/app"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Rozpocznij ewidencję
              </Link>
            </div>
          </div>
        </div>
      </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kompletne rozwiązanie do ewidencji czasu
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Time Tracker Pro oferuje wszystkie narzędzia potrzebne do skutecznego zarządzania czasem pracy w Twojej organizacji
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Ewidencja Czasu</h3>
              <p className="text-gray-600 text-center">Precyzyjne rejestrowanie godzin pracy z wykorzystaniem kodów QR i skanowania mobilnego.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Zarządzanie Zespołem</h3>
              <p className="text-gray-600 text-center">Kompleksowe zarządzanie pracownikami, stanowiskami i uprawnieniami w systemie.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-xl mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Raporty i Analizy</h3>
              <p className="text-gray-600 text-center">Szczegółowe raporty dotyczące czasu pracy, produktywności i statystyk zespołu.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-16">
          <div className="px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Gotowy na rozpoczęcie?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Dołącz do tysięcy firm, które już korzystają z Time Tracker Pro do zarządzania czasem pracy
            </p>
            <Link
              to="/app"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Rozpocznij ewidencję czasu
            </Link>
          </div>
        </div>

        {/* Technology and Features Information */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Zaawansowane technologie</h2>
              <p className="text-lg text-gray-600">Time Tracker Pro wykorzystuje najnowsze rozwiązania dla maksymalnej wydajności</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Technologie
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    <span className="font-medium mr-2">Frontend:</span> React + Tailwind CSS
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    <span className="font-medium mr-2">Backend:</span> FastAPI + SQLite
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                    <span className="font-medium mr-2">Skanowanie:</span> Kody QR + Camera API
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                    <span className="font-medium mr-2">Architektura:</span> System Multi-Tenant
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Kluczowe funkcjonalności
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                    <span className="font-medium mr-2">Zarządzanie:</span> Kompleksowa obsługa pracowników
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                    <span className="font-medium mr-2">Ewidencja:</span> Precyzyjne śledzenie czasu
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
                    <span className="font-medium mr-2">Raporty:</span> Szczegółowe analizy i statystyki
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></span>
                    <span className="font-medium mr-2">Bezpieczeństwo:</span> Zaawansowany system uprawnień
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Time Tracker Pro</h3>
              </div>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Profesjonalny system do ewidencji czasu pracy - zarządzaj czasem swojego zespołu efektywnie i precyzyjnie.
              </p>
              <div className="pt-8 border-t border-gray-800">
                <p className="text-gray-500">&copy; 2024 Time Tracker Pro. System do ewidencji czasu pracy.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;