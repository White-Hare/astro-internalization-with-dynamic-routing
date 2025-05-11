import { defineMiddleware } from "astro:middleware";
import { redirectToDefaultLocale } from "astro:i18n"; // function available with `manual` routing
import { supportedLangues } from "../translate";

export const languageMiddleware = defineMiddleware((ctx, next) => {

    const pathName = ctx.url.pathname;

    if (ignorePath(pathName)) {
        return next();
    }

    let cookieLang = ctx.cookies.get('language')?.value;


    if (!cookieLang && ctx.preferredLocale) {
        cookieLang = ctx.preferredLocale;
    }

    if (cookieLang && supportedLangues.includes(cookieLang)) {
        return ctx.redirect(`/${cookieLang}/${pathName}`, 302);
    }


    return redirectToDefaultLocale(ctx, 302);
});

function ignorePath(pathName: string) {
    const ignoredPaths = [
        ...supportedLangues.map((lang) => `/${lang}`),
        '/api',
        '/assets',
        '/static',
        './'
    ];

    return ignoredPaths.some((ignoredPath) => pathName.startsWith(ignoredPath));
}