// components/LanguageSwitcher.jsx
import { Languages } from 'lucide-react';
import { useState } from 'react';
import styles from './langue-switcher.module.css';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'fr' ? 'en' : 'fr'));
    // Logique pour changer la langue (ex: i18n.changeLanguage)
  };

  return (
    <button className={styles.langSwitcher} onClick={toggleLanguage} aria-label="Changer la langue">
      <Languages className={styles.icon} />
      <span className={styles.label}>{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;
