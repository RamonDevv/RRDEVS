'use client';

import Link from "next/link";
import { useLanguage } from "./language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto p-8">
        <section className="text-center mb-16 py-16">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('welcome')}
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('companyDesc')}
          </p>
          <p className="text-lg text-gray-600 mb-8">
            {t('odfDesc')}
          </p>
          <Link
            href="/odf"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            {t('exploreOdf')}
          </Link>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('ourServices')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">📱</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('mobileDev')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('mobileDesc')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">🌐</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('webDev')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('webDesc')}</p>
            </div>
          </div>
        </section>
        <section className="text-center bg-white p-12 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('readyToStart')}</h2>
          <p className="text-lg text-gray-600 mb-8">{t('contactDesc')}</p>
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            {t('getInTouch')}
          </button>
        </section>
      </div>
    </div>
  );
}
