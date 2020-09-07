import { Locale } from '../shared/types';

/**
 * Returns user-defined language if it is "fr" or "en"
 * else returns "en" by default
 */
export default function selectBrowserLanguage(
  browserLanguages: readonly string[],
): Locale {
  const languages = browserLanguages.map((language) => {
    const codes = language.split('-');
    return codes[0];
  });

  const supportedLanguage = (lang: string) => ['en', 'fr'].includes(lang);
  const availableLanguage = languages.find(supportedLanguage);

  return (availableLanguage as Locale) || 'en';
}
