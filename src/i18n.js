import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// provide english and german versions of all relevant strings for use with
// i18next and the useTranslation() hook and t() function, which is indexed
// by the keys in the following JSON:
const resources = {
    en: {
        translation: {
            "reset": "Reset",
            "tutorial": "Computer Graphics Tutorial",
        }
    },
    de: {
        translation: {
            "reset": "zurücksetzen",
            "tutorial": "Computergrafik Tutorat",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;