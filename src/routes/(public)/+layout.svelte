<script>
  import { setLocale } from "$lib/i18n/i18n-svelte";
  import "@fontsource/poppins";
  import "../../app.postcss";

  export let data;
  setLocale(data.locale);
</script>

<slot />
