<script lang="ts">
  import { screenshot } from "./stores";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";

  const screenshotSrc = writable("");
  onMount(() => {
    screenshot.subscribe((value) => {
      if (value instanceof Blob) {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result == "string") {
            screenshotSrc.set(reader.result);
          }
        };

        reader.readAsDataURL(value);
      }
    });
  });
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img src={$screenshotSrc} class="rounded-xl drop-shadow-xl opacity-90" style="max-width: 65%; max-height: 65%;"/>

