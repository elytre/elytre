import { useParams } from 'react-router-dom';

import en from '../translations/en.js';
import fr from '../translations/fr.js';

type Locale = 'en' | 'fr';

export default function useTrans(key: string): string {
  // Get current locale from route
  const { locale } = useParams<{ locale: Locale }>();

  if (!locale) {
    throw new Error('Cannot find locale in route.');
  }

  if (!['en', 'fr'].includes(locale)) {
    throw new Error(`Unknown locale ${locale}.`);
  }

  const translations = locale === 'fr' ? fr : en;

  // Get translation using Trans children as key
  const translation = translations.find((trans) => trans.key === key);

  if (!translation) {
    throw new Error(
      `Missing translation for key "${key}" in locale "${locale}".`,
    );
  }

  // If there is no translation for this key, use key as default
  return translation.text;
}
