import i18next from "i18next";
import en from "../locales/en.json";
import vn from "../locales/vn.json";

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: (typeof resources)["en"];
    }
}

const defaultNS = "translation";

export const resources = {
    en: {
        [defaultNS]: en,
    },
    vn: {
        [defaultNS]: vn,
    },
} as const;

export const availableLanguages = Object.keys(resources);

i18next.init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
        escapeValue: false,
    },
    resources
});

export default i18next;
