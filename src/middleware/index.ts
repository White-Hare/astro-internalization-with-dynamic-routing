import { sequence } from "astro:middleware";
import { languageMiddleware } from "./language.middleware";

export const onRequest = sequence(languageMiddleware);
