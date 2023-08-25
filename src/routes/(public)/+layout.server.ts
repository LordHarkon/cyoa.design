/* eslint-disable arrow-body-style */
// import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals }) => {
  return {
    // session: locals.session,
    locale: locals.locale,
  };
}) satisfies LayoutServerLoad;
