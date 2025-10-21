'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    home: 'Home',
    odfApp: 'ODF App',
    // Home page
    welcome: 'Welcome to R & R Devs',
    companyDesc: 'We are a professional software development company specializing in innovative mobile and web applications that transform ideas into reality.',
    odfDesc: 'Our flagship app, ODF (Orden Financiero), helps users manage their financial orders efficiently.',
    exploreOdf: 'Explore ODF App',
    ourServices: 'Our Services',
    mobileDev: 'Mobile App Development',
    mobileDesc: 'Creating user-friendly mobile applications for Android and iOS platforms with cutting-edge technology and intuitive design.',
    webDev: 'Web Development',
    webDesc: 'Building responsive and dynamic websites using modern technologies like React, Next.js, and Tailwind CSS.',
    readyToStart: 'Ready to Get Started?',
    contactDesc: 'Contact us today to discuss your project and bring your ideas to life.',
    getInTouch: 'Get in Touch',
    // ODF page
    odfTitle: 'ODF (Orden Financiero)',
    odfSubtitle: 'A powerful financial management app designed to streamline your financial orders and transactions with cutting-edge features and intuitive design.',
    keyFeatures: 'Key Features',
    orderManagement: 'Order Management',
    orderDesc: 'Easily create, track, and manage financial orders with intuitive interfaces and real-time updates.',
    realTime: 'Real-time Updates',
    realTimeDesc: 'Get instant notifications and updates on your financial transactions and order status.',
    secure: 'Secure Transactions',
    secureDesc: 'Bank-level security to protect your financial data and transactions with advanced encryption.',
    reporting: 'Reporting',
    reportingDesc: 'Generate detailed reports on your financial activities and orders with customizable analytics.',
    multiPlatform: 'Multi-platform',
    multiPlatformDesc: 'Available on Android now, with iOS version coming soon. Web version also available for seamless access.',
    userFriendly: 'User-friendly',
    userFriendlyDesc: 'Simple and intuitive design for users of all technical levels, ensuring a smooth experience.',
    downloadToday: 'Download ODF Today',
    downloadDesc: 'Available on Google Play Store. Coming soon to App Store. Start managing your finances efficiently.',
    downloadAndroid: 'Download for Android',
    downloadIOS: 'Coming Soon for iOS',
    // Footer
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact',
  },
  es: {
    // Header
    home: 'Inicio',
    odfApp: 'App ODF',
    // Home page
    welcome: 'Bienvenido a R & R Devs',
    companyDesc: 'Somos una empresa profesional de desarrollo de software especializada en aplicaciones móviles e web innovadoras que transforman ideas en realidad.',
    odfDesc: 'Nuestra aplicación insignia, ODF (Orden Financiero), ayuda a los usuarios a gestionar sus órdenes financieras de manera eficiente.',
    exploreOdf: 'Explorar App ODF',
    ourServices: 'Nuestros Servicios',
    mobileDev: 'Desarrollo de Apps Móviles',
    mobileDesc: 'Creando aplicaciones móviles fáciles de usar para plataformas Android e iOS con tecnología de vanguardia y diseño intuitivo.',
    webDev: 'Desarrollo Web',
    webDesc: 'Construyendo sitios web responsivos y dinámicos utilizando tecnologías modernas como React, Next.js y Tailwind CSS.',
    readyToStart: '¿Listo para Empezar?',
    contactDesc: 'Contáctanos hoy para discutir tu proyecto y dar vida a tus ideas.',
    getInTouch: 'Ponerse en Contacto',
    // ODF page
    odfTitle: 'ODF (Orden Financiero)',
    odfSubtitle: 'Una poderosa aplicación de gestión financiera diseñada para optimizar tus órdenes y transacciones financieras con características de vanguardia y diseño intuitivo.',
    keyFeatures: 'Características Principales',
    orderManagement: 'Gestión de Órdenes',
    orderDesc: 'Crea, rastrea y gestiona fácilmente órdenes financieras con interfaces intuitivas y actualizaciones en tiempo real.',
    realTime: 'Actualizaciones en Tiempo Real',
    realTimeDesc: 'Recibe notificaciones instantáneas y actualizaciones sobre tus transacciones financieras y el estado de las órdenes.',
    secure: 'Transacciones Seguras',
    secureDesc: 'Seguridad de nivel bancario para proteger tus datos financieros y transacciones con encriptación avanzada.',
    reporting: 'Reportes',
    reportingDesc: 'Genera reportes detallados sobre tus actividades financieras y órdenes con análisis personalizables.',
    multiPlatform: 'Multiplataforma',
    multiPlatformDesc: 'Disponible en Android ahora, con versión iOS próximamente. Versión web también disponible para acceso fluido.',
    userFriendly: 'Fácil de Usar',
    userFriendlyDesc: 'Diseño simple e intuitivo para usuarios de todos los niveles técnicos, asegurando una experiencia fluida.',
    downloadToday: 'Descarga ODF Hoy',
    downloadDesc: 'Disponible en Google Play Store. Próximamente en App Store. Comienza a gestionar tus finanzas de manera eficiente.',
    downloadAndroid: 'Descargar para Android',
    downloadIOS: 'Próximamente para iOS',
    // Footer
    rights: 'Todos los derechos reservados.',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    contact: 'Contacto',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es'); // Default to Spanish

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};