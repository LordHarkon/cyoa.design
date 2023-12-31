import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { initAcceptLanguageHeaderDetector } from "typesafe-i18n/detectors";
import { detectLocale } from "$lib/i18n/i18n-util";

const handleDetectLocale = (async ({ event, resolve }) => {
  // TODO: get lang from cookie / user setting
  const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(event.request);
  const locale = detectLocale(acceptLanguageHeaderDetector);
  event.locals.locale = locale;

  return resolve(event, { transformPageChunk: ({ html }) => html.replace("%lang%", locale) });
}) satisfies Handle;

export const handle = sequence(handleDetectLocale);
