'use client';

import { useLanguage } from "../language-context";

export default function ODFPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto p-8">
        <section className="text-center mb-16 py-16">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t('odfTitle')}
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('odfSubtitle')}
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('keyFeatures')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">📋</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('orderManagement')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('orderDesc')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('realTime')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('realTimeDesc')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">🔒</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('secure')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('secureDesc')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">📊</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('reporting')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('reportingDesc')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">🌍</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('multiPlatform')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('multiPlatformDesc')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">👤</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('userFriendly')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('userFriendlyDesc')}</p>
            </div>
          </div>
        </section>
        <section className="text-center bg-white p-12 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('downloadToday')}</h2>
          <p className="text-lg text-gray-600 mb-8">{t('downloadDesc')}</p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center space-x-2"
            >
              <span>📱</span>
              <span>{t('downloadAndroid')}</span>
            </a>
            <div className="bg-gray-400 text-gray-600 px-8 py-4 rounded-full font-semibold shadow-lg flex items-center space-x-2 cursor-not-allowed">
              <span>🍎</span>
              <span>{t('downloadIOS')}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}