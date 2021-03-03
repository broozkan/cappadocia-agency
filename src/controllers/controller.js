import translations from '../lib/dictionary'

export const getTranslatedString = (element) => {
    return translations[element][localStorage.getItem('language')]
}

