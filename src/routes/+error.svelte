<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="full flex h-full w-full flex-col items-center justify-center font-bold text-red-600">
  <h1 class="text-7xl">{$page.status}</h1>
  <h2 class="text-5xl">{$page.error?.message}</h2>
</div>
