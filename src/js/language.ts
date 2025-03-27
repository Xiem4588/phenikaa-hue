import i18next from "../configs/i18n";

const defaultLanguage = "en";
const supportedLanguages = ["vn"];

const handleLanguage = () => {
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const langFromPath = pathSegments[0];
    const savedLanguage = localStorage.getItem("language") || defaultLanguage;
    const isLangInPath = supportedLanguages.includes(langFromPath);
    const initialLanguage = isLangInPath ? langFromPath : savedLanguage;

    i18next.changeLanguage(initialLanguage);
    localStorage.setItem("language", initialLanguage);

    if (isLangInPath && initialLanguage === defaultLanguage) {
        const newPath = window.location.pathname.replace(/^\/(vn)/, "");
        window.location.assign(newPath || "/");
        return;
    }

    if (!isLangInPath && initialLanguage !== defaultLanguage) {
        const newPath = `/${initialLanguage}${window.location.pathname}`;
        window.location.assign(newPath);
        return;
    }

    const updateLinksWithLanguagePrefix = (lang: string) => {
        const links = document.querySelectorAll("a[href]");
        links.forEach((link) => {
            const href = link.getAttribute("href");
            if (href && !href.startsWith("http")) {
                if (!/^\/(vn)\//.test(href) && lang !== defaultLanguage) {
                    link.setAttribute("href", `/${lang}${href}`);
                } else if (/^\/(vn)\//.test(href) && lang === defaultLanguage) {
                    link.setAttribute("href", href.replace(/^\/(vn)/, ""));
                }
            }
        });
    };
    updateLinksWithLanguagePrefix(initialLanguage);

    const languageSwitcher = document.getElementById("language-switcher") as HTMLSelectElement;
    if (languageSwitcher) {
        languageSwitcher.value = initialLanguage;
    }

    languageSwitcher?.addEventListener("change", (event) => {
        const newLanguage = (event.target as HTMLSelectElement).value;
        i18next.changeLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);

        let newPath = window.location.pathname;
        if (supportedLanguages.includes(newLanguage)) {
            if (!isLangInPath) {
                newPath = `/${newLanguage}${newPath}`;
            } else {
                newPath = newPath.replace(/^\/(vn)/, `/${newLanguage}`);
            }
        } else {
            newPath = newPath.replace(/^\/(vn)/, "");
        }

        history.pushState({}, "", newPath || "/");
        window.location.reload();
    });
}

export default handleLanguage;
