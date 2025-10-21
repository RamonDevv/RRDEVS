'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { LanguageProvider, useLanguage } from "./language-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">R & R Devs</h1>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-blue-200 transition duration-300">{t('home')}</Link></li>
            <li><Link href="/odf" className="hover:text-blue-200 transition duration-300">{t('odfApp')}</Link></li>
          </ul>
          <button
            onClick={toggleLanguage}
            className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            {language === 'en' ? 'ESP' : 'EN'}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white p-8 mt-12">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2025 R & R Devs. {t('rights')}</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400 transition">{t('privacy')}</a>
          <a href="#" className="hover:text-blue-400 transition">{t('terms')}</a>
          <a href="#" className="hover:text-blue-400 transition">{t('contact')}</a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
