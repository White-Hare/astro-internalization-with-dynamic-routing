import tr from './tr.json';
import en from './en.json';


export const supportedLangues = ['en', 'tr'];
export const defaultLang = 'tr';

export const translations = {
  en,
  tr,
} as const;


export function getLangFromUrl(url: URL) {
  const lang = url.pathname.split('/').at(1)!;
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof typeof translations[typeof defaultLang]) {
    return key in translations[lang] ? (translations[lang] as any)[key] : translations[defaultLang][key];
  }
}


export function getTranslation(url: URL) {
  const lang = getLangFromUrl(url);
  return useTranslations(lang);
}