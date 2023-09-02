<script lang="ts">
  import { LL } from "$lib/i18n/i18n-svelte";
</script>

<h2 class="h2 font-bold">Hello World</h2>
<h1 class="text-3xl font-bold">{$LL.titleShort()}</h1>
<button class="btn variant-filled-primary">Test Button</button>
