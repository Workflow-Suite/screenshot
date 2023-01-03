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

<img src={$screenshotSrc} class="w-2/3 rounded-xl drop-shadow-xl opacity-90" />
